import Image from "next/image";
import swim from "@/../public/images/home/swim.jpg";
import setup from "@/../public/images/home/setup.jpg";
import coding from "@/../public/images/home/coding.jpg";
import fitness from "@/../public/images/home/fitness.jpg";
import running from "@/../public/images/home/running.jpg";
import presentation from "@/../public/images/home/presentation.jpg";

import { Shell } from "@/components/shell";
import { siteConfig } from "@/config/site";
import { LinkBadge } from "@/components/link-badge";

export default function Home() {
  return (
    <Shell>
      <section className="prose prose-zinc dark:prose-invert">
        <h2 className="text-xl font-semibold">hey, I’m Emir 👋</h2>
        <p className="leading-loose">
          I’m a full-stack developer and hybrid athlete from Istanbul, Turkey. I
          currently work as a software developer at{" "}
          <LinkBadge aria-label="OBSS Technology" href="https://obss.tech/en/">
            OBSS Technology
          </LinkBadge>
          . I am also a hybrid athlete who is interested in several sports
          including running, cycling, swimming and weightlifting.
        </p>
      </section>
      <section className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-4">
        <div className="relative h-40">
          <Image
            alt="My setup"
            src={setup}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative sm:row-span-2 row-span-1">
          <Image
            alt="Me presenting our thesis project at the university"
            src={presentation}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover sm:object-center"
          />
        </div>
        <div className="relative">
          <Image
            alt="Me coding in the train"
            src={coding}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt="Me swimming at a pool"
            src={swim}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover sm:object-center"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt="Me running at a park"
            src={running}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40">
          <Image
            alt="Me lifting weights at the gym"
            src={fitness}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </section>
      <section className="prose prose-zinc dark:prose-invert">
        <p className="leading-loose">
          This is my personal website where I share my thoughts, skills,
          experiences, training logs and projects. I built this site using{" "}
          <LinkBadge aria-label="Next.js" href="https://nextjs.org/">
            Next.js
          </LinkBadge>
          ,{" "}
          <LinkBadge aria-label="Tailwind CSS" href="https://tailwindcss.com/">
            Tailwind CSS
          </LinkBadge>{" "}
          and{" "}
          <LinkBadge aria-label="shadcn/ui" href="https://ui.shadcn.com/">
            shadcn/ui
          </LinkBadge>
          . You can find the source code of this site on{" "}
          <LinkBadge aria-label="GitHub" href={siteConfig.links.github}>
            GitHub
          </LinkBadge>
          .
        </p>
      </section>
    </Shell>
  );
}
