'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Publications', href: '/publications' },
  { name: 'Research', href: '/research' },
  { name: 'Experience', href: '/experience' },
  { name: 'CV', href: '/contact' },
];

export default function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <nav className='container flex h-14 items-center justify-between'>
        <Link href='/' className='flex items-center space-x-2'>
          <span className='font-bold'>Abdullah Al Maruf</span>
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-6'>
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden'
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label='Toggle menu'
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className='md:hidden'>
          <div className='container py-2 flex flex-col gap-2'>
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary py-2'
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
