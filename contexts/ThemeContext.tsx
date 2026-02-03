import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    highContrast: boolean;
    toggleHighContrast: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light');
    const [highContrast, setHighContrast] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') as Theme | null;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
        setTheme(initialTheme);

        // Check high contrast preference
        const storedContrast = localStorage.getItem('highContrast') === 'true';
        setHighContrast(storedContrast);
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    useEffect(() => {
        if (highContrast) {
            document.documentElement.classList.add('high-contrast');
            localStorage.setItem('highContrast', 'true');
        } else {
            document.documentElement.classList.remove('high-contrast');
            localStorage.setItem('highContrast', 'false');
        }
    }, [highContrast]);

    const toggleTheme = useCallback(() => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }, []);

    const toggleHighContrast = useCallback(() => {
        setHighContrast(prev => !prev);
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, highContrast, toggleHighContrast }}>
            {children}
        </ThemeContext.Provider>
    );
};
