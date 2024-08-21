import { cn } from "@/lib/utils";

const RacRadixButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-3 text-sm text-background",
        className,
      )}
    >
      {children}
    </button>
  );
};

RacRadixButton.displayname = "button";
export { RacRadixButton };
