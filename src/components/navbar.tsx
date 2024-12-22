"use client";
import React, { useState, MouseEventHandler, ReactNode  } from 'react';
import Link from 'next/link';
import Image from 'next/image';


interface NavLinkProps {
  href: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  isMobile?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick, isMobile }) => {
  if (isMobile) {
    return (
      <Link
        href={href}
        className="block text-4xl font-medium py-4 text-center hover:text-gray-600 transition-colors"
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link href={href} className="group relative overflow-hidden inline-block">
      <span className="relative block py-2 transition-transform duration-300 group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute left-0 top-full block py-2 transition-transform duration-300 group-hover:-translate-y-full">
        {children}
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/', text: 'HOME' },
    { href: '/over-ons', text: 'OVER ONS' },
    { href: '/services', text: 'SERVICES' },
    { href: '/nieuws', text: 'NIEUWS' },
    { href: '/contact', text: 'CONTACT' }
  ];

  return (
    <nav className="font-inter bg-background py-2 px-6 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and company name */}
        <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
          <div className="relative w-12 h-12">
            <Image
              src="/images/logo.png"
              alt="SOOF Factoring Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xl text-secondary font-medium">SOOF FACTORING B.V.</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="lg:hidden w-8 h-8 flex items-center justify-center focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-center items-center">
            <span
              className={`absolute w-full h-0.5 bg-black transform transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45' : '-translate-y-2'
                }`}
            />
            <span
              className={`absolute w-full h-0.5 bg-black transform transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'
                }`}
            />
            <span
              className={`absolute w-full h-0.5 bg-black transform transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45' : 'translate-y-2'
                }`}
            />
          </div>
        </button>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:items-center lg:space-x-8">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.text}
            </NavLink>
          ))}
        </div>

        {/* Full-screen mobile menu */}
        <div
          className={`fixed inset-0 bg-white transition-transform duration-500 transform lg:hidden ${isOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
          <div className="h-full flex flex-col items-center justify-center space-y-6 p-8">
            {links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                isMobile
              >
                {link.text}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;