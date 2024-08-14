import Link from "next/link";

import type { Metadata } from "next";
import { Shell } from "@/components/shell";
import { siteConfig } from "@/config/site";
import { Suspense } from "react";
import { ProjectCardSkeleton } from "@/components/skeletons/project-card-skeleton";
import { getProjects } from "@/lib/actions/github";
import { ProjectCard } from "@/components/cards/project-card";

export const metadata: Metadata = {
  title: "Work",
  description: "A summary of my work.",
};

export default function WorkPage() {
  return (
    <Shell>
      <section className="prose prose-zinc dark:prose-invert">
        <h2 className="text-xl font-semibold">wor</h2>
        <p className="leading-loose">
          I am a full-stack developer with a strong passion for{" "}
          <strong>web development</strong>. I enjoy creating web applications
          using modern technologies and frameworks. I have experience in both
          front-end and back-end development. Here’s a summary of my work to
          date.
        </p>
      </section>
      <section className="prose prose-zinc dark:prose-invert">
        <h2 className="text-lg font-semibold mb-1">
          <Link
            href="https://www.obss.com.tr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/90 no-underline transition-colors hover:text-foreground"
          >
            OBSS Technology
          </Link>
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm">
          Software Developer, 2023 — Present
        </p>
        <p className="leading-loose">
          Firstly, I worked as an intern and then I was hired as a part-time
          software developer at OBSS Technology. I worked on developing
          responsive and accessible web applications using modern front-end and
          back-end technologies. On the front-end, I utilized{" "}
          <strong>React, Next.js, and Tailwind CSS</strong> to create
          user-friendly and efficient interfaces. On the back-end, I employed{" "}
          <strong>C# and .NET Core</strong> to develop RESTful APIs and
          microservices. I also managed databases using{" "}
          <strong>SQL Server and PostgreSQL</strong>. Additionally, I gained
          experience in containerizing applications using{" "}
          <strong>Docker</strong> while working with these technologies.
        </p>
      </section>
      <section className="prose prose-zinc dark:prose-invert">
        <h2 className="text-lg font-semibold mb-1">
          <Link
            href="https://eksim.com.tr/en/homepage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/90 no-underline transition-colors hover:text-foreground"
          >
            Eksim Holding
          </Link>
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm">
          Software Developer Intern, 2020 — 2023
        </p>
        <p className="leading-loose">
          At Eksim Holding, I contributed to the development and maintenance of
          web applications by working on both front-end and back-end tasks. I
          used <strong>HTML/CSS, JavaScript, JQuery, Bootstrap</strong> to
          design intuitive and effective user interfaces on the front-end. On
          the back-end, I utilized <strong>C# and .NET Framework/Core</strong>{" "}
          to build and refine backend services and RESTful APIs. My role also
          involved managing databases with{" "}
          <strong>SQL Server, PostgreSQL and Oracle</strong>. Additionally, I
          addressed issues in existing projects and implemented necessary
          updates.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          <Link
            href={siteConfig.links.githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/90 no-underline transition-colors hover:text-foreground"
          >
            projects<span className="sr-only">projects</span>
          </Link>
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Suspense
            fallback={Array.from({ length: 4 }).map((_, i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          >
            <Projects />
          </Suspense>
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          techs<span className="sr-only">techs</span>
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {/* TODO: Add tech cards */}
        </div>
      </section>
    </Shell>
  );
}

async function Projects() {
  const projects = await getProjects({ count: 4 });

  return (
    <>
      {projects?.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </>
  );
}
