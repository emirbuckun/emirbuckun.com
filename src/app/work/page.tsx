import type { Metadata } from "next";
import { Shell } from "@/components/shell";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description: "A summary of my work.",
};

export default function WorkPage() {
  return (
    <Shell>
      <section className="prose prose-zinc dark:prose-invert">
        <h2 className="text-xl font-semibold">my work</h2>
        <p className="leading-loose">
          I am a full-stack developer with a strong passion for web development.
          I enjoy creating web applications using modern technologies and
          frameworks. I have experience in both front-end and back-end
          development. Here’s a summary of my work to date.
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
          Software Developer
        </p>
        <p className="leading-loose">
          I worked on developing responsive and accessible web applications
          using modern front-end and back-end technologies. On the front-end, I
          utilized <strong>React, Next.js, and Tailwind CSS</strong> to create
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
    </Shell>
  );
}
