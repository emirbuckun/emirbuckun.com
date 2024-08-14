import type { Metadata } from "next";
import { Shell } from "@/components/shell";

export const metadata: Metadata = {
  title: "Sport",
  description: "A summary of my sport.",
};

export default function SportPage() {
  return (
    <Shell>
      <section className="prose prose-zinc dark:prose-invert">
        <h2 className="text-xl font-semibold">sport</h2>
        <p className="leading-loose">
          Sports are a major passion of mine and an integral part of my life. I
          thoroughly enjoy engaging in various athletic disciplines and
          incorporating them into my daily routine. I actively participate in a
          range of sports, including weightlifting, running, swimming, and
          cycling. For me, sports are essential for both my physical and mental
          well-being.
        </p>
      </section>
    </Shell>
  );
}
