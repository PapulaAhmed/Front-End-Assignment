"use client";

import Link from "next/link";
import Logo from "./logo";
import GetFreeBtn from "./getfreebtn";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <Logo />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/about"
              className="text-sm font-medium hover:opacity-70 transition-opacity"
              style={{ color: "#6B7280" }}
            >
              About
            </a>
            <a
              href="/features"
              className="text-sm font-medium hover:opacity-70 transition-opacity"
              style={{ color: "#6B7280" }}
            >
              Features
            </a>
            <a
              href="/customers"
              className="text-sm font-medium hover:opacity-70 transition-opacity"
              style={{ color: "#6B7280" }}
            >
              Customers
            </a>
            <a
              href="/updates"
              className="text-sm font-medium hover:opacity-70 transition-opacity"
              style={{ color: "#6B7280" }}
            >
              Updates
            </a>
            <a
              href="/help"
              className="text-sm font-medium hover:opacity-70 transition-opacity"
              style={{ color: "#6B7280" }}
            >
              Help
            </a>

            {/* CTA Button - moved inside navigation container */}
            <GetFreeBtn />
          </div>

          {/* Mobile menu button */}
          <div className="block md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset transition-colors"
              style={{ color: "#6B7280" }}
              onFocus={(e) => {
                e.currentTarget.style.outline = `2px solid #6366F1`;
              }}
              onBlur={(e) => {
                e.currentTarget.style.outline = "none";
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
