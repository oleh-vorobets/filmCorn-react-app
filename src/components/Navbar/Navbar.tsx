import { useState } from 'react';

import './Navbar.css';

import { Logo } from './Logo/Logo';
import { Search } from './Search/Search';
import { FoundNumber } from './FoundNumber/FoundNumber';

export function Navbar() {
    return (
        <nav className="nav-bar">
            <Logo />
            <Search>Search movies...</Search>
            <FoundNumber />
        </nav>
    );
}
