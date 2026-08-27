import Link from "next/link";
import { Product, formatINR, savingsPct } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="group block">
      {/* Card is just a thin frame around the photo */}
      <div className="rounded-[4px] border border-ash bg-pure-white p-1">
        <div className="relative aspect-square overflow-hidden rounded-[4px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      {/* Text sits below the frame, never on the card */}
      <div className="mt-3">
        <p className="text-caption text-smoke">
          {product.brand} · {product.condition}
        </p>
        <p className="mt-1 text-body text-ink-black">{product.name}</p>
        <p className="mt-2 text-caption text-smoke">
          <s>{formatINR(product.retailPrice)}</s>
          <span className="ml-2 rounded-[40px] border border-ink-black px-2 py-0.5 text-[12px] text-ink-black">
            −{savingsPct(product)}%
          </span>
        </p>
        <p className="mt-1 text-subheading text-ink-black">
          {formatINR(product.price)}
        </p>
      </div>
    </Link>
  );
}
