import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

/**
 * Convert images to WebP format
 * This script converts all JPG, JPEG, and PNG images in the public folder to WebP
 * while keeping the original files as fallback
 */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const QUALITY = 80; // WebP quality (0-100, 80 is a good balance)

// Supported image formats
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png'];

async function convertToWebP(inputPath, outputPath) {
    try {
        await sharp(inputPath)
            .webp({ quality: QUALITY })
            .toFile(outputPath);

        const inputStats = fs.statSync(inputPath);
        const outputStats = fs.statSync(outputPath);
        const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(2);

        console.log(`✅ Converted: ${path.basename(inputPath)}`);
        console.log(`   Original: ${(inputStats.size / 1024).toFixed(2)} KB`);
        console.log(`   WebP: ${(outputStats.size / 1024).toFixed(2)} KB`);
        console.log(`   Savings: ${savings}%\n`);

        return { success: true, savings: parseFloat(savings) };
    } catch (error) {
        console.error(`❌ Error converting ${path.basename(inputPath)}:`, error.message);
        return { success: false, savings: 0 };
    }
}

async function convertAllImages() {
    console.log('🖼️  WebP Image Converter\n');
    console.log(`📁 Scanning directory: ${PUBLIC_DIR}\n`);

    if (!fs.existsSync(PUBLIC_DIR)) {
        console.error('❌ Public directory not found!');
        process.exit(1);
    }

    const files = fs.readdirSync(PUBLIC_DIR);
    const imageFiles = files.filter(file => {
        const ext = path.extname(file).toLowerCase();
        return SUPPORTED_FORMATS.includes(ext);
    });

    if (imageFiles.length === 0) {
        console.log('⚠️  No images found to convert.');
        return;
    }

    console.log(`Found ${imageFiles.length} image(s) to convert:\n`);

    let totalOriginalSize = 0;
    let totalWebPSize = 0;
    let successCount = 0;

    for (const file of imageFiles) {
        const inputPath = path.join(PUBLIC_DIR, file);
        const nameWithoutExt = path.parse(file).name;
        const outputPath = path.join(PUBLIC_DIR, `${nameWithoutExt}.webp`);

        // Skip if WebP already exists
        if (fs.existsSync(outputPath)) {
            console.log(`⏭️  Skipped: ${file} (WebP already exists)\n`);
            continue;
        }

        const result = await convertToWebP(inputPath, outputPath);

        if (result.success) {
            successCount++;
            const inputStats = fs.statSync(inputPath);
            const outputStats = fs.statSync(outputPath);
            totalOriginalSize += inputStats.size;
            totalWebPSize += outputStats.size;
        }
    }

    // Summary
    console.log('═'.repeat(50));
    console.log('📊 Conversion Summary\n');
    console.log(`✅ Successfully converted: ${successCount}/${imageFiles.length}`);

    if (totalOriginalSize > 0) {
        const totalSavings = ((1 - totalWebPSize / totalOriginalSize) * 100).toFixed(2);
        console.log(`💾 Total original size: ${(totalOriginalSize / 1024).toFixed(2)} KB`);
        console.log(`💾 Total WebP size: ${(totalWebPSize / 1024).toFixed(2)} KB`);
        console.log(`🎉 Total savings: ${totalSavings}%`);
    }

    console.log('\n✨ Done! Your images are now optimized for the web.');
}

// Run the conversion
convertAllImages().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});
