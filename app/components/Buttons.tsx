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
        "inline-flex h-9 items-center justify-center gap-1 rounded-full bg-foreground px-5 font-[400] leading-none text-background",
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
        "inline-flex h-8 items-center justify-center gap-1 rounded-full bg-foreground px-4 font-[400] leading-none text-background",
        className,
      )}
    >
      {children}
    </Button>
  );
};

export { ButtonSmall, ButtonDefault };
