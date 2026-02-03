
import React, { useState, useEffect } from 'react';
import { useModal } from '../contexts/ModalContext';
import XIcon from './icons/XIcon';
import SimpleQuoteForm from './SimpleQuoteForm';

const BuildModal: React.FC = () => {
    const { isBuildModalOpen, closeBuildModal } = useModal();
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        if (isBuildModalOpen) setShouldRender(true);
    }, [isBuildModalOpen]);

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            closeBuildModal();
        }
    };

    if (!shouldRender) return null;

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 sm:p-6 ${isBuildModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            onTransitionEnd={() => !isBuildModalOpen && setShouldRender(false)}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"
                onClick={handleBackdropClick}
            />

            {/* Modal Container */}
            <div
                className={`relative w-full max-w-4xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 transform ${isBuildModalOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
                    }`}
            >
                <button
                    onClick={closeBuildModal}
                    className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 backdrop-blur-md transition-all sm:bg-muted sm:text-muted-foreground sm:hover:bg-muted/80"
                >
                    <XIcon className="h-5 w-5" />
                </button>

                <div className="flex flex-col md:flex-row">
                    {/* Left Side: Image */}
                    <div className="md:w-1/2 relative min-h-[300px] md:min-h-[500px]">
                        <img
                            src="/images/family-home.jpg?v=1"
                            alt="Building your dream home"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 text-white">
                            <h2 className="text-2xl md:text-3xl font-bold mb-2">Build Your Dream</h2>
                            <p className="text-white/80 text-sm md:text-base leading-relaxed">
                                Join hundreds of happy families who found their perfect home with Construction Buddy.
                                We don't just build houses, we create foundations for your future.
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center bg-card">
                        <div className="mb-8">
                            <h3 className="text-2xl font-extrabold text-foreground mb-2">Get Your Free Quote</h3>
                            <p className="text-muted-foreground text-sm">Tell us about your project and we'll get back to you within 24 hours.</p>
                        </div>
                        <div className="overflow-y-auto max-h-[60vh] md:max-h-none">
                            <SimpleQuoteForm onSuccess={closeBuildModal} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuildModal;
