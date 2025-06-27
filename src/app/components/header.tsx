'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

export default function Header() {
  const { primary } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center font-mont">
        {/* Logo + Brand Text */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/favicon.png"
            alt="NLS Logo"
            width={40}
            height={40}
            priority
          />
          <h1
            className={clsx(
              'text-xl font-bold cursor-pointer transition-colors duration-300',
              isScrolled ? 'text-gray-800' : 'text-white'
            )}
          >
            <span className="block md:hidden">NLS</span>
            <span className="hidden md:block">New Lakshmi Store</span>
          </h1>
        </Link>

        {/* Navigation */}
        <nav
          className={clsx(
            'space-x-4 sm:space-x-6 text-sm sm:text-base font-medium transition-colors duration-300',
            isScrolled ? 'text-gray-800' : 'text-white'
          )}
        >
          <Link href="/" className="hover:text-blue-700 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-700 transition">About</Link>
          <Link href="/contact" className="hover:text-blue-700 transition">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
