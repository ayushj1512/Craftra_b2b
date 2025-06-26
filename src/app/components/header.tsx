'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

export default function Header() {
  const { primary } = useTheme();

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center font-mont">

        {/* Logo + Brand Text */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/NLS_logo.png"
            alt="NLS Logo"
            width={40}
            height={40}
            priority
          />
          <h1
            className="text-xl font-bold cursor-pointer"
            style={{ color: primary }}
          >
            <span className="block md:hidden">NLS</span>
            <span className="hidden md:block">New Lakshmi Store</span>
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="space-x-4 sm:space-x-6 text-sm sm:text-base font-medium">
          <Link href="/" className="hover:text-blue-700 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-700 transition">About</Link>
          <Link href="/contact" className="hover:text-blue-700 transition">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
