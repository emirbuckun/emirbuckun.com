import Link from "next/link";

import { Shell } from "@/components/shell";

export default function NotFound() {
  return (
    <Shell>
      <section className="prose prose-zinc dark:prose-invert">
        <h2 className="text-xl font-semibold">
          Oh no! This page doesn’t exist.
        </h2>
        <p className="leading-loose">
          If you expected to see something here, let me know{" "}
          <Link href="mailto:emirbuckun@hotmail.com">via email</Link>.
        </p>
      </section>
    </Shell>
  );
}
