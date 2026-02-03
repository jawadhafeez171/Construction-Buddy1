import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
    badge?: string;
    title: string;
    description?: string;
    centered?: boolean;
    lightMode?: boolean;
    className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    badge,
    title,
    description,
    centered = true,
    lightMode = false,
    className = ""
}) => {
    return (
        <div
            className={`mb-12 md:mb-16 ${centered ? 'text-center mx-auto max-w-3xl' : 'text-left'} ${className}`}
        >
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {badge && (
                    <span className={`inline-block px-4 py-1.5 mb-4 text-[10px] font-black uppercase tracking-[0.25em] rounded-full border ${lightMode
                            ? 'bg-white/10 border-white/20 text-white'
                            : 'bg-secondary/10 border-secondary/20 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-tertiary'
                        }`}>
                        {badge}
                    </span>
                )}

                <h2 className={`text-3xl md:text-5xl font-black leading-tight tracking-tight mb-6 ${lightMode ? 'text-white' : 'text-foreground'
                    }`}>
                    {title}
                </h2>

                <div className={`h-1.5 w-24 mb-6 rounded-full bg-gradient-to-r from-secondary to-tertiary ${centered ? 'mx-auto' : ''
                    }`} />

                {description && (
                    <p className={`text-base md:text-lg leading-relaxed ${lightMode ? 'text-white/80' : 'text-muted-foreground'
                        }`}>
                        {description}
                    </p>
                )}
            </motion.div>
        </div>
    );
};

export default SectionHeader;
