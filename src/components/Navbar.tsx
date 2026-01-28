'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: '#about', label: 'À propos' },
        { href: '#skills', label: 'Compétences' },
        { href: '#projects', label: 'Projets' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <Link href="/" className="navbar-logo">
                    DC<span style={{ opacity: 0.5 }}>.</span>
                </Link>
                <ul className="navbar-links">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
