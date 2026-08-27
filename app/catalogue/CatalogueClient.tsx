"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function CatalogueClient() {
  const router = useRouter();
  const params = useSearchParams();
  const active = params.get("category") ?? "Featured";
  const q = (params.get("q") ?? "").toLowerCase();

  const items = useMemo(() => {
    let list = PRODUCTS;
    if (active !== "Featured") list = list.filter((p) => p.category === active);
    if (q)
      list = list.filter((p) =>
        [p.name, p.brand, p.category, p.condition]
          .join(" ")
          .toLowerCase()
          .includes(q)
      );
    return list;
  }, [active, q]);

  const setCategory = (c: string) => {
    const next = new URLSearchParams(params.toString());
    if (c === "Featured") next.delete("category");
    else next.set("category", c);
    router.push(`/catalogue?${next.toString()}`);
  };

  return (
    <div className="mx-auto max-w-[1280px] px-6 pt-10 lg:px-12">
      <h1 className="font-serif-display text-heading-lg text-ink-black">
        Catalogue
      </h1>
      <span className="accent-rule mt-3" />
      {q && (
        <p className="mt-3 text-body text-charcoal">
          Results for “{params.get("q")}” —{" "}
          <button
            onClick={() => {
              const next = new URLSearchParams(params.toString());
              next.delete("q");
              router.push(`/catalogue?${next.toString()}`);
            }}
            className="underline underline-offset-2"
          >
            clear
          </button>
        </p>
      )}

      {/* Category pills — scrollable row */}
      <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
        {CATEGORIES.map((c) => {
          const isActive = c === active;
          return (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={
                "shrink-0 whitespace-nowrap rounded-[40px] border px-[23px] py-2.5 text-caption " +
                (isActive
                  ? "border-ink-black bg-ink-black text-pure-white"
                  : "border-charcoal bg-pure-white text-ink-black")
              }
            >
              {c}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      {items.length > 0 ? (
        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {items.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-[4px] border border-ash bg-pure-white p-8">
          <p className="text-body text-charcoal">
            Nothing matches that search. Try a broader term, or browse a
            category above.
          </p>
        </div>
      )}
    </div>
  );
}
