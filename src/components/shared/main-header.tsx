'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { RecursiveDropdown } from '../ui/recursive-dropdown';

const navLinks = [
  { name: 'Home', href: '/' },
  {
    name: 'Call For Papers',
    href: '/call-for-papers',
  },
  {
    name: 'Organization',
    children: [
      {
        name: 'Organizing Committee',
        href: '/committee',
      },
      {
        name: 'PC Member',
        href: '/pc-committee',
      },
    ],
  },
  {
    name: 'Past pkaw',
    children: [
      {
        name: 'Pkaw 2024',
        href: '/pkaw-2024',
      },
      {
        name: 'Pkaw 2023',
        href: '/pkaw-2023',
      },
    ],
  },
];

export default function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <nav className='container flex h-14 items-center justify-center'>
        {/* <Link href='/' className='flex items-center space-x-2'>
          <span className='font-bold'>Home</span>
        </Link> */}

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-6 items-center'>
          {navLinks.map((item) =>
            item.children ? (
              <RecursiveDropdown key={item.name} item={item} />
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className='text-sm font-medium transition-colors hover:text-primary capitalize'
              >
                {item.name}
              </Link>
            )
          )}
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

      {/* Mobile Dropdown - recursive */}
      {isOpen && (
        <div className='md:hidden'>
          <div className='container py-2 flex flex-col gap-2 absolute bg-white items-start w-full left-0'>
            {navLinks.map((item) =>
              item.children ? (
                <RecursiveDropdown
                  key={item.name}
                  item={item}
                  onClick={() => setIsOpen(false)}
                />
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary py-2'
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
