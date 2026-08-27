"use client";

import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCTS, bySlug } from "@/lib/products";

export interface DemoLead {
  name: string;
  phone: string;
  city: string;
  productSlug: string;
  date: string;
  notes: string;
}

/**
 * Single integration point for lead delivery.
 * Later: point this at the WhatsApp flow (wa.me deep link and/or
 * Cloud API route) without touching the form.
 */
async function submitLead(lead: DemoLead): Promise<void> {
  console.log("[decibel] demo lead:", lead);
}

const inputCls =
  "w-full rounded-[4px] border border-charcoal bg-pure-white px-4 py-3 text-body text-ink-black placeholder:text-smoke focus:outline-none focus:border-ink-black";

export default function DemoClient() {
  const params = useSearchParams();
  const preselected = bySlug(params.get("product") ?? "");
  const [sent, setSent] = useState(false);
  const [lead, setLead] = useState<DemoLead>({
    name: "",
    phone: "",
    city: "",
    productSlug: preselected?.slug ?? "",
    date: "",
    notes: "",
  });

  const set = (k: keyof DemoLead) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setLead({ ...lead, [k]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitLead(lead);
    setSent(true);
  };

  const chosen = bySlug(lead.productSlug);

  if (sent) {
    return (
      <div className="mx-auto max-w-[1280px] px-6 pt-14 lg:px-12">
        <div className="mx-auto max-w-[560px] rounded-[4px] border border-ash bg-pure-white p-8">
          <h1 className="font-serif-display text-heading text-ink-black">
            Demo requested.
          </h1>
          <span className="accent-rule mt-3" />
          <p className="mt-4 text-body text-charcoal">
            Thanks, {lead.name.split(" ")[0] || "there"}. We have your request
            {chosen ? (
              <> for the <strong className="font-normal">{chosen.name}</strong></>
            ) : null}{" "}
            and will confirm your slot on {lead.phone} shortly.
          </p>
          <p className="mt-3 text-body text-charcoal">
            Bring your own music — the room is yours for the hour.
          </p>
          <div className="mt-6">
            <Link
              href="/catalogue"
              className="rounded-[4px] bg-ink-black px-[23px] py-3 text-body text-pure-white"
            >
              Back to the catalogue
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1280px] px-6 pt-10 lg:px-12">
      <div className="grid gap-12 lg:grid-cols-[5fr_7fr]">
        {/* Editorial side */}
        <div>
          <h1 className="font-serif-display text-heading-lg text-ink-black">
            Book a demo
          </h1>
          <span className="accent-rule mt-3" />
          <p className="mt-4 max-w-[44ch] text-body text-charcoal">
            Every system on the site is racked and wired in our warehouse.
            Pick a date, tell us what you want to hear, and we will have it
            playing when you walk in.
          </p>
          <ul className="mt-6 space-y-3 text-body text-charcoal">
            <li>— Demos run about an hour, free of charge.</li>
            <li>— Bring your own tracks, engineer, or SPL meter.</li>
            <li>— The unit you hear is the unit you buy.</li>
          </ul>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="rounded-[4px] border border-ash bg-pure-white p-6 lg:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-caption text-charcoal">Full name</label>
              <input id="name" required value={lead.name} onChange={set("name")} placeholder="Your name" className={`mt-2 ${inputCls}`} />
            </div>
            <div>
              <label htmlFor="phone" className="text-caption text-charcoal">Phone (WhatsApp preferred)</label>
              <input id="phone" required type="tel" value={lead.phone} onChange={set("phone")} placeholder="+91" className={`mt-2 ${inputCls}`} />
            </div>
            <div>
              <label htmlFor="city" className="text-caption text-charcoal">City</label>
              <input id="city" required value={lead.city} onChange={set("city")} placeholder="Where are you coming from?" className={`mt-2 ${inputCls}`} />
            </div>
            <div>
              <label htmlFor="date" className="text-caption text-charcoal">Preferred date</label>
              <input id="date" required type="date" value={lead.date} onChange={set("date")} className={`mt-2 ${inputCls}`} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="product" className="text-caption text-charcoal">What do you want to hear?</label>
              <select id="product" required value={lead.productSlug} onChange={set("productSlug")} className={`mt-2 ${inputCls}`}>
                <option value="" disabled>
                  Choose a listing
                </option>
                {PRODUCTS.map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.name} — {p.brand}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="notes" className="text-caption text-charcoal">Anything else? (optional)</label>
              <textarea id="notes" rows={4} value={lead.notes} onChange={set("notes")} placeholder="Venue size, use case, budget, other gear you want pulled out…" className={`mt-2 ${inputCls}`} />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 rounded-[4px] bg-ink-black px-[23px] py-3 text-body text-pure-white"
          >
            Request demo slot
          </button>
          <p className="mt-3 text-caption text-smoke">
            We confirm every request personally — no automated booking, no spam.
          </p>
        </form>
      </div>
    </div>
  );
}
