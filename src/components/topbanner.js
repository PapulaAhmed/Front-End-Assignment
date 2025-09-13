"use client";
import Link from "next/link";
import { useState } from "react";

const TopBanner = ({
  text = "This page is included in a free SaaS Website Kit",
  linkHref = "https://example.com",
  linkLabel = "View the complete Kit",
  className = "",
}) => {
  return (
    <div
      className={`relative z-30 w-full bg-black text-[13px] sm:text-sm text-slate-200 flex flex-wrap items-center justify-center px-3 py-2 gap-2 border-b border-neutral-800 pointer-events-auto ${className}`}
      role="banner"
    >
      {/* Hide text on mobile and tablet, show only on desktop (lg and up) */}
      <span className="opacity-80 whitespace-normal text-center select-none hidden lg:block">
        {text}
      </span>
      <Link
        href={linkHref}
        className="inline-flex items-center font-medium text-white hover:underline underline-offset-4 decoration-slate-400/60 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-sm"
        target="_blank"
        rel="noopener noreferrer"
      >
        {linkLabel}
        <span
          aria-hidden
          className="ml-1 transition-transform group-hover:translate-x-0.5"
        >
          →
        </span>
      </Link>
    </div>
  );
};

export default TopBanner;
