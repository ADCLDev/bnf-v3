// src/components/shared/Navbar.tsx
'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { User, ChevronDown, Menu, X } from 'lucide-react';
import CartPopup from '../reuseable/CartPopUp';
import Image from 'next/image';
import { useFirebase } from '@/lib/firebase/context';
import { authService } from '@/lib/firebase/auth';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const { user } = useFirebase();
  const router = useRouter();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // State to track logout status
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Get user-specific links based on roles
  const getUserLinks = () => {
    const links = [
      { href: '/profile', label: 'Profile' },
    ];

    if (user?.is_contributor) {
      links.push({ href: '/contributor-dashboard', label: 'Contributor Dashboard' });
    }

    if (user?.is_admin) {
      links.push({ href: '/admin-dashboard', label: 'Admin Dashboard' });
    }

    if (user?.is_subscriber) {
      links.push({ href: '/subscription-dashboard', label: 'Subscription Dashboard' });
    }

    // Add logout at the end
    links.push({ href: '/logout', label: 'Logout' });

    return links;
  };

  const dropdownLinks = getUserLinks();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/faqs', label: 'FAQs' },
  ];

  // Handle clicks outside the dropdown and mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true); // Set logout status to true
      await authService.signOut(); // Perform logout
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  // Redirect to home page after logout
  useEffect(() => {
    if (isLoggingOut) {
      router.push('/'); // Redirect to home page
    }
  }, [isLoggingOut, router]);

  return (
    <header className="border-b relative z-50 bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="JiFont Fonts Logo"
              width={150}
              height={50}
              className="w-[100px] md:w-[150px] h-auto" // 100px on mobile, 150px on desktop
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-red-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Cart */}
            <div className="hidden sm:block">
              <CartPopup />
            </div>

            {/* User Menu */}
            {user ? (
              <div ref={dropdownRef} className="relative flex items-center space-x-1">
                <Link href="/welcome">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <User className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
                  </div>
                </Link>

                <button
                  onClick={toggleDropdown}
                  className="p-1 md:p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 md:w-56 bg-white rounded-lg shadow-lg py-1 border">
                    {dropdownLinks.map((link) =>
                      link.href === '/logout' ? (
                        <button
                          key="logout"
                          className="w-full text-left block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-500 transition-colors"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      ) : (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-500 transition-colors"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {link.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login" // Correct login link
                className="hidden sm:block bg-red-500 text-white px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-medium hover:bg-red-600 transition-colors"
              >
                Get Started
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg"
          >
            <div className="container mx-auto px-4 py-2">
              <nav className="flex flex-col space-y-2 py-4">
                {/* Regular Navigation Links */}
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-500 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* User-specific Links */}
                {user &&
                  dropdownLinks.map((link) =>
                    link.href === '/logout' ? (
                      <button
                        key="logout"
                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-500 rounded-lg transition-colors"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-500 rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )
                  )}

                {/* Mobile Cart */}
                <div className="sm:hidden px-4 py-2">
                  <CartPopup />
                </div>

                {/* Mobile Get Started Button */}
                {!user && (
                  <Link
                    href="/login" // Correct login link
                    className="sm:hidden px-4 py-2 text-center bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                )}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
