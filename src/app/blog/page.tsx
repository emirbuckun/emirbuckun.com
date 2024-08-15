import type { Metadata } from "next";
import { Shell } from "@/components/shell";

export const metadata: Metadata = {
  title: "Blog",
  description: "A list of blog posts.",
};

export default function SportPage() {
  return (
    <Shell>
      <section className="prose prose-zinc dark:prose-invert">
        <h2 className="text-xl font-semibold">my blog</h2>
        <p className="leading-loose">
          I believe in the power of an active lifestyle to fuel creativity and
          productivity. My blog is a space where I share insights and
          experiences from my journey in web development, alongside tips and
          stories from my athletic pursuits. Whether I’m coding a new web
          application or pushing my limits in weightlifting, running, swimming,
          or cycling, I’m always striving for growth and excellence. Join me as
          I explore the intersection of technology and fitness, and share what
          I’ve learned along the way.
        </p>
      </section>
    </Shell>
  );
}
