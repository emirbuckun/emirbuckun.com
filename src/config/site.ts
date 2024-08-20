export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "emirbuckun",
  title: "emirbuckun",
  description: "Personal website of Emir, built with Next.js.",
  url: "https://emirbuckun.com",
  links: {
    github: "https://github.com/emirbuckun/emirbuckun.com",
    githubProfile: "https://github.com/emirbuckun",
    linkedinProfile: "https://www.linkedin.com/in/emirbuckun",
  },
  navItems: [
    {
      title: "home",
      href: "/",
      description: "home",
    },
    {
      title: "work",
      href: "/work",
      description: "work",
    },
    {
      title: "sport",
      href: "/sport",
      description: "sport",
    },
    {
      title: "blog",
      href: "/blog",
      description: "blog",
    },
  ],
};
