import Link from "next/link";

export const metadata = { title: "About — DECIBEL" };

export default function AboutPage() {
  return (
    <div>
      <div className="mx-auto max-w-[1280px] px-6 pt-10 lg:px-12">
        <h1 className="font-serif-display text-heading-lg text-ink-black">
          About Decibel
        </h1>
        <span className="accent-rule mt-3" />
        <div className="mt-6 max-w-[64ch] space-y-4 text-body text-charcoal">
          <p>
            Decibel sells professional sound, lighting and DJ equipment at a
            fraction of its retail price. Our inventory comes from rental
            fleets, demo floors, closed venues, and open-box returns — gear
            that has worked for a living and been maintained like it.
          </p>
          <p>
            Every unit is serviced and bench-tested before it is listed, and
            every listing describes the exact serial on our floor: its hours,
            its history, and what was replaced. Nothing is sold sight unseen
            unless you want it that way — the demo warehouse exists so you can
            hear precisely what you are buying.
          </p>
          <p>
            We keep the catalogue small on purpose. When something sells, it
            comes down; when something arrives, it goes up only after it has
            been through the bench.
          </p>
        </div>
      </div>

      <section className="mt-14 w-full bg-forest">
        <div className="mx-auto max-w-[1280px] px-6 py-12 lg:px-12">
          <h2 className="font-serif-display max-w-[26ch] text-[30px] leading-[1.27] text-pure-white">
            The listening room is open Tuesday to Sunday, by appointment.
          </h2>
          <p className="mt-5 text-body">
            <Link href="/demo" className="text-butter-highlight underline underline-offset-4">
              Book a demo
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
