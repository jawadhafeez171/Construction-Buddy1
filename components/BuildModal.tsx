
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
                className="absolute inset-0 bg-background/80 backdrop-blur-md"
                onClick={handleBackdropClick}
            />

            {/* Modal Container */}
            <div
                className={`relative w-full max-w-lg bg-card border border-border rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 transform ${isBuildModalOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border bg-muted/30">
                    <h2 className="text-xl font-bold">Build With Us</h2>
                    <button
                        onClick={closeBuildModal}
                        className="p-1 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                    >
                        <XIcon className="h-6 w-6" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto max-h-[80vh]">
                    <SimpleQuoteForm onSuccess={closeBuildModal} />
                </div>
            </div>
        </div>
    );
};

export default BuildModal;
