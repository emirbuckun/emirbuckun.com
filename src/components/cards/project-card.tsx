import Link from "next/link";

import type { Project } from "@/types";
import { StarIcon } from "@radix-ui/react-icons";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { formatNumber } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="rounded-none">
      <Link
        href={project.html_url ?? siteConfig.links.githubProfile}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full flex-col transition-colors hover:bg-muted/25"
      >
        <CardHeader className="flex-1">
          <CardTitle className="line-clamp-1">{project.name}</CardTitle>
          <CardDescription className="line-clamp-2">
            {project.description ?? "No description provided"}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Icons.circle
              className="mr-1 size-3 fill-current text-[#3178c6]"
              aria-hidden="true"
            />
            {project.language ?? "Unknown"}
          </div>
          <div className="flex items-center">
            <StarIcon className="mr-1 size-3" aria-hidden="true" />
            {formatNumber(project.stargazers_count)}
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
