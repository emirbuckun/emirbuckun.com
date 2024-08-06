import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { absoluteUrl, cn } from "@/lib/utils";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layouts/nav";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://emirbuckun.com"),
  title: {
    default: "Emir Büçkün",
    template: "%s | Emir Büçkün",
  },
  description: "Developer and hybrid athlete.",
  keywords: [
    "emirbuckun",
    "software engineer",
    "software developer",
    "full stack developer",
    "web developer",
    "developer",
    "hybrid athlete",
    "athlete",
    "sportsman",
    "react",
    "nextjs",
    "typescript",
    "tailwindcss",
    "tailwind",
    "css",
    "javascript",
  ],
  authors: [
    {
      name: "Emir Buckun",
      url: "https://emirbuckun.com",
    },
  ],
  creator: "Emir Buckun",
  openGraph: {
    title: "Emir Büçkün",
    description: "Developer and hybrid athlete.",
    url: "https://emirbuckun.com",
    siteName: "Emir Büçkün",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Emir Büçkün",
    description: "Developer and hybrid athlete.",
    card: "summary_large_image",
    creator: "@emirbuckun",
  },
  icons: {
    icon: "/icon.png",
  },
  manifest: absoluteUrl("/site.webmanifest"),
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
          </div>
          <TailwindIndicator />
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
