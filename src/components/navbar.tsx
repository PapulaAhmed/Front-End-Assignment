"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import GetFreeBtn from "./getfreebtn";
import { motion, AnimatePresence } from "framer-motion";
import TopBanner from "./topbanner";

interface NavLink {
  href: string;
  text: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const navLinks: NavLink[] = [
    { href: "/about", text: "About" },
    { href: "/features", text: "Features" },
    { href: "/customers", text: "Customers" },
    { href: "/updates", text: "Updates" },
    { href: "/help", text: "Help" },
  ];

  return (
    <>
      <TopBanner
        linkHref="https://example.com/kit"
        linkLabel="View the complete Kit"
      />
      <nav className="bg-white border-b border-gray-100 relative z-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex items-center justify-between md:justify-around lg:justify-between h-16">
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
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium hover:opacity-70 transition-opacity"
                  style={{ color: "#6B7280" }}
                >
                  {link.text}
                </Link>
              ))}
              <GetFreeBtn />
            </div>

            {/* Mobile menu button */}
            <div className="block md:hidden">
              <button
                onClick={toggleMenu}
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
                <motion.div
                  animate={isOpen ? "open" : "closed"}
                  variants={{
                    closed: { rotate: 0 },
                    open: { rotate: 180 },
                  }}
                  transition={{ duration: 0.3 }}
                >
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
                      d={
                        isOpen
                          ? "M6 18L18 6M6 6l12 12"
                          : "M4 6h16M4 12h16M4 18h16"
                      }
                    />
                  </svg>
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-white z-10 pt-20"
          >
            <div className="flex flex-col items-center space-y-8 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-2xl font-medium text-gray-600 hover:text-black transition-colors"
                  onClick={toggleMenu}
                >
                  {link.text}
                </Link>
              ))}
              <GetFreeBtn />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
