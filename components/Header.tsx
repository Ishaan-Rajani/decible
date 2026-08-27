"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CATEGORIES } from "@/lib/products";

export default function Header() {
  const router = useRouter();
  const [q, setQ] = useState("");

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(q.trim() ? `/catalogue?q=${encodeURIComponent(q.trim())}` : "/catalogue");
  };

  return (
    <div className="bg-cream-paper">
      {/* Promo banner — thin line of type, no fill */}
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <p className="py-2 text-center text-caption text-ink-black">
          Touring-grade sound at 30–40% of retail.{" "}
          <Link href="/demo" className="underline underline-offset-2">
            Book a demo
          </Link>{" "}
          and hear it first.
        </p>
      </div>

      {/* Main header row */}
      <header className="border-b border-ash bg-cream-paper">
        <div className="mx-auto flex max-w-[1280px] items-center gap-6 px-6 py-4 lg:px-12">
          {/* Wordmark — wide tracking only */}
          <Link
            href="/"
            className="shrink-0 text-[18px] font-normal tracking-[0.35em] text-ink-black"
          >
            DECIBEL
          </Link>

          {/* Pill search — the only non-rectangular control */}
          <form onSubmit={submitSearch} className="hidden flex-1 md:block">
            <div className="mx-auto flex max-w-[520px] items-center gap-3 rounded-[40px] border border-ash bg-pure-white px-4 py-2.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#333333"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search line arrays, subs, controllers…"
                className="w-full bg-transparent text-body text-ink-black placeholder:text-charcoal focus:outline-none"
              />
            </div>
          </form>

          {/* Utility actions */}
          <nav className="ml-auto flex shrink-0 items-center gap-5">
            <Link href="/about" className="hidden text-caption text-ink-black sm:block">
              About
            </Link>
            <Link href="/catalogue" className="hidden text-caption text-ink-black sm:block">
              Catalogue
            </Link>
            <Link
              href="/demo"
              className="rounded-[4px] bg-ink-black px-[23px] py-2 text-caption text-pure-white"
            >
              Book a Demo
            </Link>
          </nav>
        </div>

        {/* Category text nav */}
        <div className="mx-auto max-w-[1280px] overflow-x-auto px-6 lg:px-12">
          <nav className="flex items-center justify-center gap-4 whitespace-nowrap py-3">
            {CATEGORIES.map((c) => (
              <Link
                key={c}
                href={c === "Featured" ? "/catalogue" : `/catalogue?category=${encodeURIComponent(c)}`}
                className="text-caption text-ink-black hover:underline hover:underline-offset-4"
              >
                {c}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
}
