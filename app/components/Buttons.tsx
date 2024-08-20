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
        "inline-flex items-center justify-center gap-1 rounded-full bg-foreground px-5 font-[400] leading-none text-background",
        "h-12 min-w-12", // Base size
        "sm:h-9 sm:min-h-9", // tablet/desktop
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
        "inline-flex items-center justify-center gap-1 rounded-full bg-foreground px-4 font-[400] leading-none text-background",
        "h-10 min-w-10", // Base size
        "sm:h-8 sm:min-h-8", // tablet/desktop
        className,
      )}
    >
      {children}
    </Button>
  );
};

export { ButtonSmall, ButtonDefault };
