'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo Text Responsive */}
        <Link href="/">
          <h1 className="text-xl font-bold text-primary text-blue-900 cursor-pointer">
            <span className="block md:hidden">NLS</span>
            <span className="hidden md:block">New Lakshmi Store</span>
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="space-x-6 text-black font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
