import Link from "next/link";
import MobileNav from "@/components/layouts/mobile-nav";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layouts/theme-toggle";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export function Navbar() {
  const navItems = siteConfig.navItems;
  return (
    <header className="w-full bg-background pt-4">
      <div className="container flex h-16 max-w-3xl items-center justify-between">
        <MobileNav items={navItems} />
        <Link href="/" className="font-bold hidden sm:flex">
          {siteConfig.name}
          <span className="sr-only">Home</span>
        </Link>
        <div className="hidden sm:flex">
          {navItems?.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 px-2"
            >
              {item.title}
            </Link>
          ))}
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
