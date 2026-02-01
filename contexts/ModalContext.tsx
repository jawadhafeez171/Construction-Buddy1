
import React, { createContext, useContext, useState, useCallback } from 'react';

interface ModalContextType {
    isBuildModalOpen: boolean;
    openBuildModal: () => void;
    closeBuildModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isBuildModalOpen, setIsBuildModalOpen] = useState(false);

    const openBuildModal = useCallback(() => {
        setIsBuildModalOpen(true);
        // Lock body scroll
        document.body.style.overflow = 'hidden';
    }, []);

    const closeBuildModal = useCallback(() => {
        setIsBuildModalOpen(false);
        // Unlock body scroll
        document.body.style.overflow = 'unset';
    }, []);

    return (
        <ModalContext.Provider value={{ isBuildModalOpen, openBuildModal, closeBuildModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
