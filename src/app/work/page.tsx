import Link from "next/link";

import type { Metadata } from "next";
import { Shell } from "@/components/shell";
import { TechCard } from "@/components/cards/tech-card";
import { techs } from "@/constants/techs";

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
          I am a <strong>full-stack software developer</strong> with a strong passion for{" "}
          <strong>web development</strong>. I enjoy creating web applications
          using modern technologies and frameworks. I have experience in both
          <strong> front-end</strong> and <strong>back-end</strong> development.
          Here’s a summary of my work to date.
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
          Software Developer | April 2025 — Present | Full-Time
        </p>
        <p className="leading-loose"></p>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm">
          Software Developer | November 2023 — March 2025 | Part-time
        </p>
        <p className="leading-loose">
          Managed the full development cycle of a <strong>web-based notification system</strong> with <strong>multi-channel dispatch</strong>. Built <strong>.NET microservices</strong> and <strong>Next.js app</strong> using <strong>React, TailwindCSS, Typescript, shadcn/ui</strong>.
        </p>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm">
          .NET Developer Intern | July 2023 — September 2023 | Internship
        </p>
        <p className="leading-loose">
          Received comprehensive training and developed projects that align with my skills. Created web APIs using <strong>.NET</strong> and built front-end applications with <strong>React</strong>. Gained hands-on experience in <strong>front-end</strong> and <strong>back-end</strong> development.
        </p>
        <p className="leading-loose">
          Achieved <strong>first place</strong> in the <strong>final project competition</strong> among internship program participants and received a <strong>part-time job offer</strong>.
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
          Software Developer Intern | July 2020 — June 2023 | Part-time
        </p>
        <p className="leading-loose">
          Developed and maintained <strong>web applications</strong>, working on both <strong>front-end</strong> and <strong>back-end</strong> tasks. I used <strong>HTML/CSS, JavaScript, JQuery, Bootstrap</strong> for the front-end and <strong>C# and .NET Framework/Core</strong> for the back-end. I also managed databases like <strong>SQL Server, PostgreSQL, and Oracle</strong> and resolved issues in existing projects.
        </p>
      </section>
      <section className="space-y-4">

        <h2 className="text-xl font-semibold">projects</h2>
        <div className="space-y-4">
          <div>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              Announcement Publisher (OBSS)
            </p>
            <p className="leading-loose">
              Developed a dynamic announcement publishing system to manage and distribute announcements across multiple channels.
            </p>
          </div>
          <div>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              <Link
                href="https://marmaramusas.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 text-sm underline transition-colors"
              >
                marmaramusas.com
              </Link> (Freelance)
            </p>
            <p className="leading-loose">
              Developed a website for a school club (Marmara Underwater Sports Club) to provide comprehensive information about the club’s activities, members, and events.
            </p>
          </div>
          <div>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              Talep Portal (Eksim)
            </p>
            <p className="leading-loose">
              Collaborated on developing a request management system. Implemented an approval workflow with role-based access, and created a responsive user interface.
            </p>
          </div>
          <div>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              BiFikrimVar (Eksim)
            </p>
            <p className="leading-loose">
              Worked on developing and maintaining an internal portal where employees share ideas, such as supporting idea submissions, approval workflows, voting, and feedback features.
            </p>
          </div>
          <div>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              Dava Süreç Takip Yönetimi (Eksim)
            </p>
            <p className="leading-loose">
              Built a lawsuit management portal for the legal department, providing seamless lawsuit tracking and reporting capabilities.
            </p>
          </div>
          <div>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              Paket-Rapor Yönetimi (Eksim)
            </p>
            <p className="leading-loose">
              Developed a full-stack web application from scratch to manage packages and reports for the business intelligence team. Implemented new database relationships and designed a user-friendly interface.
            </p>
          </div>
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          techs<span className="sr-only">techs</span>
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Techs />
        </div>
      </section>
    </Shell>
  );
}

async function Techs() {
  return (
    <>
      {techs?.map((tech) => (
        <TechCard key={tech.name} tech={tech} />
      ))}
    </>
  );
}
