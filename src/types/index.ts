import type { z } from "zod";

import type { projectSchema } from "@/lib/validations/project";
import type { techSchema } from "@/lib/validations/tech";

export type Project = z.infer<typeof projectSchema>;
export type Tech = z.infer<typeof techSchema>;

export interface NavItem {
  title: string;
  href: string;
  description?: string;
}
