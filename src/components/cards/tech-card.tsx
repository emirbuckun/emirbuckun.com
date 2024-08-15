import Link from "next/link";
import Image from "next/image";

import type { Tech } from "@/types";
import { siteConfig } from "@/config/site";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

interface TechCardProps {
  tech: Tech;
}

export function TechCard({ tech }: TechCardProps) {
  return (
    <Card className="rounded-none">
      <Link
        href={tech.url ?? siteConfig.links.githubProfile}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full flex-col transition-colors hover:bg-muted/25"
      >
        <CardHeader className="flex-1">
          <Image
            src={`/icons/${tech.icon}`}
            alt={tech.name ?? "Tech icon"}
            width={48}
            height={48}
            className="w-12 h-12 mx-auto mb-4"
          />
          <CardTitle className="text-center">{tech.name}</CardTitle>
        </CardHeader>
      </Link>
    </Card>
  );
}
