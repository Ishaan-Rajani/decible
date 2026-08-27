import { Suspense } from "react";
import CatalogueClient from "./CatalogueClient";

export const metadata = { title: "Catalogue — DECIBEL" };

export default function CataloguePage() {
  return (
    <Suspense>
      <CatalogueClient />
    </Suspense>
  );
}
