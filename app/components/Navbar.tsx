'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const navItems = [
  { label: 'Home', href: '/', isActive: false },
  { label: 'About Us', href: '/about', isActive: false },
  { label: 'Services', href: '/services', hasDropdown: true, isActive: false },
  { label: 'Blogs', href: '/blogs', isActive: false },
  { label: 'Contact Us', href: '/contact-us', isActive: false },
];

const servicesDropdown = [
  {
    label: 'Tax',
    hasSubmenu: true,
    submenu: [
      { label: 'Tax Operate', href: '/services/tax-operate' },
      { label: 'Tax Legislation', href: '/services/tax-legislation' },
      { label: 'Tax Technology Consulting', href: '/services/tax-technology-consulting' },
      { label: 'Global Employer Services', href: '/services/global-employer-services' },
      { label: 'Legal Business Services', href: '/services/legal-business-services' },
      { label: 'Tax Services', href: '/services/tax-services' },
    ]
  },
  {
    label: 'Consulting',
    hasSubmenu: true,
    submenu: [
      { label: 'Core Business Operations', href: '/services/core-business-operations' },
      { label: 'Customer & Marketing', href: '/services/customer-marketing' },
      { label: 'Enterprise Technology & Performance', href: '/services/enterprise-technology-performance' },
      { label: 'Human Capital', href: '/services/human-capital' },
      { label: 'Strategy & Analytics', href: '/services/strategy-analytics' },
    ]
  },
  {
    label: 'Audit & Assurance',
    hasSubmenu: true,
    submenu: [
      { label: 'Audit Innovation', href: '/services/audit-innovation' },
      { label: 'Accounting Standards', href: '/services/accounting-standards' },
      { label: 'Accounting Events & Transactions', href: '/services/accounting-events-transactions' },
    ]
  },
  { label: 'NBFC incorporation & compliances', href: '/services/nbfc-incorporation-compliances' },
  { label: 'IRDAI incorporation & Compliances', href: '/services/irdai-incorporation-compliances' },
  { label: 'FEMA Compliances & Advisory Services', href: '/services/fema-compliances-advisory-services' },
  { label: 'Insolvency resolution services – NCLT', href: '/services/insolvency-resolution-services-nclt' },
  { label: 'Mergers And Amalgamation Services', href: '/services/mergers-and-amalgamation-services' },
  { label: 'Fintech Advisory Services', href: '/services/fintech-advisory-services' },
  { label: 'Corporate Litigation and Representation', href: '/services/corporate-litigation-and-representation' },
];

interface NavbarProps {
  currentPage?: string;
}

export default function Navbar({ currentPage = '/' }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const navItemsWithActive = navItems.map(item => ({
    ...item,
    isActive: item.href === currentPage
  }));

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150); // 150ms delay
    setTimeoutId(id);
  };

  return (
    <nav className="fixed w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/image.png"
              alt="Finleaf Logo"
              width={200}
              height={60}
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItemsWithActive.map((item) => (
              <div key={item.label} className="relative">
                <div
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && handleMouseEnter()}
                  onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
                >
                  <Link
                    href={item.href}
                    className={clsx(
                      "relative text-gray-800 hover:text-primary transition-colors",
                      item.isActive && "text-primary"
                    )}
                  >
                    <span className="flex items-center">
                      {item.label}
                      {item.hasDropdown && (
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </span>
                    {item.isActive && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"></div>
                    )}
                  </Link>
                  
                  {/* Services Dropdown */}
                  {item.hasDropdown && servicesDropdownOpen && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-96 bg-amber-800 text-white rounded-lg shadow-xl z-50 border border-amber-700"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="py-3">
                        {servicesDropdown.map((service, index) => (
                          <div key={service.label}>
                            {service.hasSubmenu ? (
                              <div className="group relative">
                                <div className="flex items-center justify-between px-4 py-3 hover:bg-amber-700 transition-colors cursor-pointer">
                                  <span className="text-sm font-medium">{service.label}</span>
                                  <svg className="w-4 h-4 transform group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </div>
                                {/* Submenu */}
                                <div className="absolute left-full top-0 w-80 bg-amber-700 rounded-lg shadow-xl border border-amber-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                  <div className="py-2">
                                    {service.submenu?.map((subItem, subIndex) => (
                                      <div key={subItem.label}>
                                        <Link
                                          href={subItem.href}
                                          className="block px-4 py-3 text-sm hover:bg-amber-600 transition-colors"
                                        >
                                          {subItem.label}
                                        </Link>
                                        {subIndex < (service.submenu?.length || 0) - 1 && (
                                          <div className="border-b border-amber-600 mx-4"></div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <Link
                                href={service.href || '#'}
                                className="block px-4 py-3 text-sm hover:bg-amber-700 transition-colors"
                              >
                                {service.label}
                              </Link>
                            )}
                            {index < servicesDropdown.length - 1 && (
                              <div className="border-b border-amber-700 mx-4"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <Link
              href="https://calendly.com/finleaf/30min"
              className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors font-medium"
            >
              Make an Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={clsx('h-6 w-6', isOpen ? 'hidden' : 'block')}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={clsx('h-6 w-6', isOpen ? 'block' : 'hidden')}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, height: 'auto' },
          closed: { opacity: 0, height: 0 }
        }}
        className="md:hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
          {navItemsWithActive.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={clsx(
                "block px-3 py-2 text-gray-700 hover:text-primary transition-colors",
                item.isActive && "text-primary"
              )}
              onClick={() => setIsOpen(false)}
            >
              <span className="flex items-center">
                {item.label}
                {item.hasDropdown && (
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </span>
            </Link>
          ))}
          <Link
            href="https://calendly.com/finleaf/30min"
            className="block w-full text-center bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors font-medium"
            onClick={() => setIsOpen(false)}
          >
            Make an Appointment
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}
