import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const ButtonDefault = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <Button
      className={cn(
        "inline-flex items-center justify-center gap-1 rounded-full bg-foreground px-5 leading-none tracking-[0.01em] text-background",
        "h-12 min-w-12 text-base", // Base size
        "sm:h-9 sm:min-h-9 sm:text-sm", // tablet/desktop
        className,
      )}
    >
      {children}
    </Button>
  );
};

const ButtonSmall = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <Button
      className={cn(
        "inline-flex items-center justify-center gap-1 rounded-full bg-foreground px-4 text-xs leading-none tracking-[0.01em] text-background",
        "h-10 min-w-10 text-sm", // Base size
        "sm:h-8 sm:min-h-8 sm:text-xs", // tablet/desktop
        className,
      )}
    >
      {children}
    </Button>
  );
};

export { ButtonSmall, ButtonDefault };
