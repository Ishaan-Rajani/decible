import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, bySlug, formatINR, savingsPct } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = bySlug(slug);
  return { title: p ? `${p.name} — DECIBEL` : "Product — DECIBEL" };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = bySlug(slug);
  if (!product) notFound();

  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  ).slice(0, 4);

  return (
    <div className="mx-auto max-w-[1280px] px-6 pt-10 lg:px-12">
      {/* Breadcrumb */}
      <p className="text-caption text-smoke">
        <Link href="/catalogue" className="hover:underline">
          Catalogue
        </Link>{" "}
        /{" "}
        <Link
          href={`/catalogue?category=${encodeURIComponent(product.category)}`}
          className="hover:underline"
        >
          {product.category}
        </Link>
      </p>

      <div className="mt-6 grid gap-12 lg:grid-cols-[7fr_5fr]">
        {/* Gallery */}
        <div>
          <div className="rounded-[4px] border border-ash bg-pure-white p-1">
            <div className="aspect-[4/3] overflow-hidden rounded-[4px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.gallery[0]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          {product.gallery.length > 1 && (
            <div className="mt-4 grid grid-cols-3 gap-4">
              {product.gallery.slice(1, 4).map((g, i) => (
                <div key={i} className="rounded-[4px] border border-ash bg-pure-white p-1">
                  <div className="aspect-square overflow-hidden rounded-[4px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={g}
                      alt={`${product.name} — view ${i + 2}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div>
          <p className="text-caption text-smoke">
            {product.brand} · {product.category}
          </p>
          <h1 className="font-serif-display mt-2 text-heading text-ink-black">
            {product.name}
          </h1>
          <span className="accent-rule mt-3" />

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-[40px] border border-charcoal px-4 py-1.5 text-caption text-ink-black">
              {product.condition}
            </span>
            <span className="rounded-[40px] border border-charcoal px-4 py-1.5 text-caption text-ink-black">
              {product.stock}
            </span>
            <span className="rounded-[40px] border border-charcoal px-4 py-1.5 text-caption text-ink-black">
              Save {savingsPct(product)}%
            </span>
          </div>

          <div className="mt-6">
            <p className="text-body text-smoke">
              Retail <s>{formatINR(product.retailPrice)}</s>
            </p>
            <p className="mt-1 text-[38px] leading-[1.23] text-ink-black">
              {formatINR(product.price)}
            </p>
            <p className="mt-1 text-caption text-smoke">
              Price is for the exact unit photographed. Taxes as applicable.
            </p>
          </div>

          <p className="mt-6 text-body text-charcoal">{product.blurb}</p>

          <div className="mt-8 flex items-center gap-4">
            <Link
              href={`/demo?product=${encodeURIComponent(product.slug)}`}
              className="rounded-[4px] bg-ink-black px-[23px] py-3 text-body text-pure-white"
            >
              Book a Demo
            </Link>
            <Link
              href="/catalogue"
              className="text-body text-ink-black underline underline-offset-4"
            >
              Keep browsing
            </Link>
          </div>

          {/* Specs */}
          <div className="mt-10">
            <h2 className="font-serif-display text-heading-sm text-ink-black">
              Specifications
            </h2>
            <div className="mt-4 rounded-[4px] border border-ash bg-pure-white">
              {product.specs.map(([k, v], i) => (
                <div
                  key={k}
                  className={
                    "flex justify-between gap-6 px-4 py-3" +
                    (i > 0 ? " border-t border-ash" : "")
                  }
                >
                  <span className="text-caption text-smoke">{k}</span>
                  <span className="text-right text-caption text-ink-black">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="pt-14">
          <h2 className="font-serif-display text-heading-sm text-ink-black">
            More in {product.category}
          </h2>
          <span className="accent-rule mt-3" />
          <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
