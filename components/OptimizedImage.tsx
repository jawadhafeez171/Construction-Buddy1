import React, { useState } from 'react';

interface OptimizedImageProps {
    src: string; // Base image path without extension (e.g., "/images/project-1")
    alt: string;
    className?: string;
    loading?: 'lazy' | 'eager';
    width?: number;
    height?: number;
}

/**
 * OptimizedImage component that serves WebP images with JPG fallback
 * 
 * Usage:
 * <OptimizedImage 
 *   src="/images/project-1" 
 *   alt="Modern residence" 
 *   className="w-full h-64 object-cover"
 *   loading="lazy"
 * />
 * 
 * This will try to load:
 * 1. /images/project-1.webp (if browser supports WebP)
 * 2. /images/project-1.jpg (fallback)
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
    src,
    alt,
    className = '',
    loading = 'lazy',
    width,
    height,
}) => {
    const [imageError, setImageError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Extract base path and check if it already has an extension
    const hasExtension = /\.(jpg|jpeg|png|webp|gif)$/i.test(src);
    const basePath = hasExtension ? src.replace(/\.(jpg|jpeg|png|webp|gif)$/i, '') : src;
    const fallbackExt = hasExtension ? src.match(/\.(jpg|jpeg|png|webp|gif)$/i)?.[0] || '.jpg' : '.jpg';

    const webpSrc = `${basePath}.webp`;
    const jpgSrc = hasExtension ? src : `${basePath}${fallbackExt}`;

    const handleLoad = () => {
        setIsLoading(false);
    };

    const handleError = () => {
        setImageError(true);
        setIsLoading(false);
    };

    return (
        <div className={`relative ${className}`}>
            {/* Loading skeleton */}
            {isLoading && (
                <div className="absolute inset-0 bg-muted animate-pulse rounded" />
            )}

            {/* Image with WebP support */}
            {!imageError ? (
                <picture>
                    <source srcSet={webpSrc} type="image/webp" />
                    <source srcSet={jpgSrc} type="image/jpeg" />
                    <img
                        src={jpgSrc}
                        alt={alt}
                        className={className}
                        loading={loading}
                        width={width}
                        height={height}
                        onLoad={handleLoad}
                        onError={handleError}
                    />
                </picture>
            ) : (
                // Fallback placeholder if image fails to load
                <div className={`${className} bg-muted flex items-center justify-center text-muted-foreground`}>
                    <svg
                        className="w-12 h-12"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                    </svg>
                </div>
            )}
        </div>
    );
};

export default OptimizedImage;
