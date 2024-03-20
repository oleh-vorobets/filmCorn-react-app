import './Navbar.css';

import { Logo } from './Logo/Logo';
import { Search } from './Search/Search';
import { FoundNumber } from './FoundNumber/FoundNumber';
import { NavbarType } from './types';

export function Navbar({ foundNumber }: NavbarType) {
    return (
        <nav className="nav-bar">
            <Logo />
            <Search>Search movies...</Search>
            <FoundNumber foundNumber={foundNumber} />
        </nav>
    );
}
