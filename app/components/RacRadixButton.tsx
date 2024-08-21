import { cn } from "@/lib/utils";

const RacRadixButton = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-3 text-sm text-background",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

RacRadixButton.displayname = "button";
export { RacRadixButton };
