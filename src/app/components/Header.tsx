'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/a-letra', label: 'A Letra' },
    { href: '/a-instituicao', label: 'A Instituição' },
    { href: '/a-leitura', label: 'A Leitura' },
    { href: '/o-texto', label: 'O Texto' },
  ];

  return (
    <header className="bg-gray-800 text-white px-4 py-4 md:py-6 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center relative">

        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden z-10">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menu" aria-expanded={isMenuOpen}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline block py-2" onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}