import { Suspense } from "react";
import DemoClient from "./DemoClient";

export const metadata = { title: "Book a Demo — DECIBEL" };

export default function DemoPage() {
  return (
    <Suspense>
      <DemoClient />
    </Suspense>
  );
}
