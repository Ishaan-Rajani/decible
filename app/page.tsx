import Link from "next/link";
import { PRODUCTS, HERO_IMAGE, formatINR } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 8);
  const rigs = PRODUCTS.filter((p) => p.category === "Full Rigs");

  return (
    <div className="bg-cream-paper">
      {/* Hero — full-bleed photo, bottom-left serif headline */}
      <section className="relative h-[520px] w-full lg:h-[600px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMAGE}
          alt="Audio equipment on a bright, uncluttered surface"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-[1280px] items-end px-6 pb-14 lg:px-12">
            <div>
              <h1 className="font-serif-display max-w-[16ch] text-[38px] leading-[1.23] text-ink-black lg:text-display">
                Touring-grade sound, without the touring-grade price.
              </h1>
              <span className="accent-rule mt-4" />
              <p className="mt-4 max-w-[48ch] text-subheading text-charcoal">
                Line arrays, subs, consoles and DJ gear at 30–40% of retail —
                serviced, tested, and ready to hear in person.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <Link
                  href="/demo"
                  className="rounded-[4px] bg-ink-black px-[23px] py-3 text-body text-pure-white"
                >
                  Book a Demo
                </Link>
                <Link
                  href="/catalogue"
                  className="rounded-[4px] border border-ink-black px-[23px] py-3 text-body text-ink-black"
                >
                  Browse the catalogue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured gear */}
      <section className="mx-auto max-w-[1280px] px-6 pt-14 lg:px-12">
        <div>
          <h2 className="font-serif-display text-heading-lg text-ink-black">
            This week on the floor
          </h2>
          <span className="accent-rule mt-3" />
          <p className="mt-3 max-w-[60ch] text-body text-charcoal">
            Every listing is a physical unit in our warehouse — the exact
            serial you hear at the demo is the one that ships.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/catalogue"
            className="text-body text-ink-black underline underline-offset-4"
          >
            View the full catalogue
          </Link>
        </div>
      </section>

      {/* Inverted dark value-prop band */}
      <section className="mt-14 w-full bg-forest">
        <div className="mx-auto max-w-[1280px] px-6 py-12 lg:px-12">
          <h2 className="font-serif-display max-w-[24ch] text-[30px] leading-[1.27] text-pure-white lg:text-[38px]">
            Hear it before you buy it. Every system is racked, wired, and ready
            to play in our demo warehouse.
          </h2>
          <p className="mt-4 max-w-[56ch] text-body text-[#d8ddd9]">
            Bring your own music, your own engineer, your own SPL meter. A
            demo takes an hour and there is no charge and no obligation.
          </p>
          <p className="mt-5 text-body">
            <Link
              href="/demo"
              className="text-butter-highlight underline underline-offset-4"
            >
              Book your slot
            </Link>
          </p>
        </div>
      </section>

      {/* Why the prices are what they are — condition, not excuses */}
      <section className="mx-auto max-w-[1280px] px-6 pt-14 lg:px-12">
        <h2 className="font-serif-display text-heading-lg text-ink-black">
          How the pricing works
        </h2>
        <span className="accent-rule mt-3" />
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <div className="rounded-[4px] border border-ash bg-pure-white p-6">
            <p className="text-subheading text-ink-black">Ex-rental &amp; ex-demo</p>
            <p className="mt-2 text-body text-charcoal">
              Gear retired from rental fleets and demo floors — worked hard,
              maintained harder, and priced accordingly.
            </p>
          </div>
          <div className="rounded-[4px] border border-ash bg-pure-white p-6">
            <p className="text-subheading text-ink-black">Serviced &amp; tested</p>
            <p className="mt-2 text-body text-charcoal">
              Drivers tested and matched, faders recalibrated, lamps replaced.
              Each listing states exactly what was done.
            </p>
          </div>
          <div className="rounded-[4px] border border-ash bg-pure-white p-6">
            <p className="text-subheading text-ink-black">One unit, one listing</p>
            <p className="mt-2 text-body text-charcoal">
              No stock photos of imaginary inventory. What you see is a serial
              number sitting on our floor, reserved when you book.
            </p>
          </div>
        </div>
      </section>

      {/* Full rigs strip */}
      <section className="mx-auto max-w-[1280px] px-6 pt-14 lg:px-12">
        <h2 className="font-serif-display text-heading-lg text-ink-black">
          Complete rigs, sold as one lot
        </h2>
        <span className="accent-rule mt-3" />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {rigs.map((p) => (
            <Link key={p.slug} href={`/product/${p.slug}`} className="group block">
              <div className="rounded-[4px] border border-ash bg-pure-white p-1">
                <div className="relative aspect-[16/9] overflow-hidden rounded-[4px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="mt-3 flex items-baseline justify-between gap-4">
                <p className="text-subheading text-ink-black">{p.name}</p>
                <p className="shrink-0 text-subheading text-ink-black">
                  {formatINR(p.price)}
                </p>
              </div>
              <p className="mt-1 text-caption text-smoke">
                Retail {formatINR(p.retailPrice)} · {p.condition}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
