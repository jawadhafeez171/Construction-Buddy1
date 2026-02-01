
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVICES, PROJECTS } from '../constants';
import SearchIcon from './icons/SearchIcon';
import XIcon from './icons/XIcon';

const SearchBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<{ id: string; title: string; type: 'service' | 'project'; path: string }[]>([]);
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);
    const searchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (query.length < 2) {
            setResults([]);
            return;
        }

        const searchServices = SERVICES.filter(s =>
            s.title.toLowerCase().includes(query.toLowerCase()) ||
            s.overview.toLowerCase().includes(query.toLowerCase())
        ).map(s => ({ id: s.id, title: s.title, type: 'service' as const, path: s.path }));

        const searchProjects = PROJECTS.filter(p =>
            p.title.toLowerCase().includes(query.toLowerCase()) ||
            p.description.toLowerCase().includes(query.toLowerCase())
        ).map(p => ({ id: p.id, title: p.title, type: 'project' as const, path: `/projects/${p.id}` }));

        setResults([...searchServices, ...searchProjects].slice(0, 5));
    }, [query]);

    const handleSelect = (path: string) => {
        navigate(path);
        setIsOpen(false);
        setQuery('');
    };

    return (
        <div className="relative" ref={searchRef}>
            {!isOpen ? (
                <button
                    onClick={() => setIsOpen(true)}
                    className="p-2 text-foreground hover:bg-muted rounded-full transition-colors"
                    aria-label="Open search"
                >
                    <SearchIcon className="h-6 w-6" />
                </button>
            ) : (
                <div className="flex items-center bg-muted rounded-full px-3 py-1 w-48 md:w-64 transition-all duration-300">
                    <SearchIcon className="h-5 w-5 text-muted-foreground mr-2" />
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search..."
                        className="bg-transparent border-none focus:outline-none text-sm w-full"
                    />
                    <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
                        <XIcon className="h-4 w-4" />
                    </button>
                </div>
            )}

            {isOpen && results.length > 0 && (
                <div className="absolute top-full right-0 mt-2 w-72 bg-card border border-border rounded-lg shadow-xl z-50 overflow-hidden">
                    {results.map((result) => (
                        <button
                            key={`${result.type}-${result.id}`}
                            onClick={() => handleSelect(result.path)}
                            className="w-full text-left px-4 py-3 hover:bg-muted transition-colors flex flex-col"
                        >
                            <span className="text-sm font-semibold text-foreground">{result.title}</span>
                            <span className="text-xs text-muted-foreground capitalize">{result.type}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
