'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
// import CV from '@/lib/abfullah-al-maruf-cv.pdf';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Publications', href: '/publications' },
  { name: 'Research', href: '/research' },
  { name: 'Experience', href: '/experience' },
  { name: 'Skills', href: '/skills' },
  { name: 'Talks', href: '/talks' },
  // { name: 'CV', href: '/abfullah-al-maruf-cv.pdf' },
];

export default function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/abfullah-al-maruf-cv.pdf';
    link.download = 'abfullah-al-maruf-cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <nav className='container flex h-14 items-center justify-between'>
        <Link href='/' className='flex items-center space-x-2'>
          <span className='font-bold'>Abdullah Al Maruf</span>
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-6 items-center'>
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
            >
              {item.name}
            </Link>
          ))}
          <Button
            onClick={handleDownload}
            className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary p-0'
            variant='link'
          >
            CV
          </Button>
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
          <div className='container py-2 flex flex-col gap-2 absolute bg-white items-start'>
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
            <Button
              variant='link'
              onClick={handleDownload}
              className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary p-0'
            >
              CV
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
