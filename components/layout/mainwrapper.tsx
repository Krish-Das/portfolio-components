import { cn } from "@/lib/utils";

export const Main = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <main className={cn("container", className)} {...props} />
);

Main.displayName = "main";
