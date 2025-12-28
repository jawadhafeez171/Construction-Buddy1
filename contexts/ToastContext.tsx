import React, { createContext, useContext, useState, useCallback } from 'react';
import { Toast, ToastType, useToast } from '../components/Toast';
import { ToastContainer } from '../components/Toast';

interface ToastContextType {
  showToast: (message: string, type?: ToastType, duration?: number) => void;
  showSuccess: (message: string) => void;
  showError: (message: string) => void;
  showInfo: (message: string) => void;
  showWarning: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToastContext must be used within ToastProvider');
  }
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { toasts, showToast, closeToast } = useToast();

  const showSuccess = useCallback((message: string) => {
    showToast(message, 'success', 3000);
  }, [showToast]);

  const showError = useCallback((message: string) => {
    showToast(message, 'error', 5000);
  }, [showToast]);

  const showInfo = useCallback((message: string) => {
    showToast(message, 'info', 3000);
  }, [showToast]);

  const showWarning = useCallback((message: string) => {
    showToast(message, 'warning', 4000);
  }, [showToast]);

  return (
    <ToastContext.Provider value={{ showToast, showSuccess, showError, showInfo, showWarning }}>
      {children}
      <ToastContainer toasts={toasts} onClose={closeToast} />
    </ToastContext.Provider>
  );
};

