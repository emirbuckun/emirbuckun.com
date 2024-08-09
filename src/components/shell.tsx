import { cn } from "@/lib/utils";

interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

function Shell({
  className,
  as: Comp = "section",
  ...props
}: Readonly<ShellProps>) {
  return (
    <Comp
      className={cn(
        "container grid max-w-3xl items-center gap-8 pt-6 pb-10 md:pb-12",
        className
      )}
      {...props}
    />
  );
}

export { Shell };
