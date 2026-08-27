import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-14 border-t border-ash bg-cream-paper">
      <div className="mx-auto grid max-w-[1280px] gap-8 px-6 py-12 md:grid-cols-4 lg:px-12">
        <div>
          <p className="text-[16px] tracking-[0.35em] text-ink-black">DECIBEL</p>
          <p className="mt-4 max-w-[28ch] text-caption text-smoke">
            Professional sound, lighting and DJ equipment — serviced, tested,
            and priced well below retail.
          </p>
        </div>
        <div>
          <p className="text-caption text-smoke">Shop</p>
          <ul className="mt-3 space-y-2 text-caption text-charcoal">
            <li><Link href="/catalogue" className="hover:underline">Full catalogue</Link></li>
            <li><Link href="/catalogue?category=Line%20Arrays" className="hover:underline">Line arrays</Link></li>
            <li><Link href="/catalogue?category=Subwoofers" className="hover:underline">Subwoofers</Link></li>
            <li><Link href="/catalogue?category=DJ%20Controllers" className="hover:underline">DJ controllers</Link></li>
            <li><Link href="/catalogue?category=Full%20Rigs" className="hover:underline">Full rigs</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-caption text-smoke">Company</p>
          <ul className="mt-3 space-y-2 text-caption text-charcoal">
            <li><Link href="/about" className="hover:underline">About us</Link></li>
            <li><Link href="/demo" className="hover:underline">Book a demo</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-caption text-smoke">Visit</p>
          <p className="mt-3 text-caption text-charcoal">
            Demo warehouse, by appointment only.
            <br />
            Open Tue–Sun, 11:00–20:00.
          </p>
        </div>
      </div>
      <div className="border-t border-ash">
        <div className="mx-auto max-w-[1280px] px-6 py-5 lg:px-12">
          <p className="text-caption text-smoke">
            © 2026 Decibel. All equipment sold as described, demo before purchase encouraged.
          </p>
        </div>
      </div>
    </footer>
  );
}
