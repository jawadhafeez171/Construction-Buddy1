import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useKeyboardShortcuts = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            // Ignore if typing in input/textarea
            if (
                event.target instanceof HTMLInputElement ||
                event.target instanceof HTMLTextAreaElement
            ) {
                return;
            }

            switch (event.key.toLowerCase()) {
                case 'h':
                    if (!event.ctrlKey && !event.metaKey) navigate('/');
                    break;
                case 'c':
                    if (!event.ctrlKey && !event.metaKey) navigate('/cost-calculator');
                    break;
                case 'p':
                    if (!event.ctrlKey && !event.metaKey) navigate('/projects');
                    break;
                case 's':
                    if (!event.ctrlKey && !event.metaKey) navigate('/services/home-construction');
                    break; // Default service
                case '?':
                    // Would trigger a help modal - for now console log or could be added to context
                    console.log('Shortcuts: H (Home), C (Calculator), P (Projects), S (Services)');
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [navigate]);
};
