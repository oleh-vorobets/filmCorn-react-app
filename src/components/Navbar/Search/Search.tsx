import { useState } from 'react';

import './Search.css';
import { SearchType } from '../types';

export function Search({ children }: SearchType) {
    const [query, setQuery] = useState('');

    return (
        <input
            className="search"
            placeholder={children}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
    );
}
