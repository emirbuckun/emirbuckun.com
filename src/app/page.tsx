import { Shell } from "@/components/shell";
import Link from "next/link";

export default function Home() {
  return (
    <Shell variant="markdown">
      <section className="prose prose-zinc dark:prose-invert">
        <h2 className="text-xl font-semibold">hey, {`I'm`} Emir 👋</h2>
        <p className="leading-loose">
          {`I'm`} a software developer and hybrid athlete from Istanbul, Turkey.
          I currently work as software developer at{" "}
          <Link
            href="https://obss.com.tr"
            target="_blank"
            rel="noreferrer"
            className="no-underline"
          >
            OBSS
          </Link>
          . I am also a hybrid athlete who is interested in several sports
          including running, cycling, swimming, and weightlifting.
        </p>
      </section>
      {/* TODO: Add some images */}
      {/* TODO: Add more text describes technical specialities */}
    </Shell>
  );
}
