import * as z from "zod";

export const techSchema = z.object({
  name: z.string().optional().nullable(),
  icon: z.string().optional().nullable(),
  url: z.string().optional().nullable(),
});
