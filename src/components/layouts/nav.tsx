import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layouts/theme-toggle";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const navItems = {
  "/": {
    name: "home",
  },
  "/work": {
    name: "work",
  },
  "/sport": {
    name: "sport",
  },
  "/blog": {
    name: "blog",
  },
};

export function Navbar() {
  return (
    <header className="w-full bg-background pt-4">
      <div className="container flex h-16 max-w-3xl items-center justify-between">
        {/* TODO: make navbar responsive with toggle button on the left */}
        <Link href="/" className="font-bold">
          {siteConfig.name}
          <span className="sr-only">Home</span>
        </Link>
        <div className="flex">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 px-2"
              >
                {name}
              </Link>
            );
          })}
        </div>
        <nav className="flex items-center space-x-1">
          <Button variant="ghost" size="icon" className="size-7" asChild>
            <Link
              href={siteConfig.links.githubProfile}
              target="_blank"
              rel="noreferrer"
            >
              <GitHubLogoIcon className="size-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="size-7">
            <Link
              href={siteConfig.links.linkedinProfile}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInLogoIcon className="size-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
