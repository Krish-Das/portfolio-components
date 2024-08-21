import { cn } from "@/lib/utils";
import { useButton } from "@react-aria/button";
import { useRef } from "react";

const RacRadixButton = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const { buttonProps } = useButton({ onPress: onClick }, ref);

  return (
    <button
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-3 text-sm text-background",
        className,
      )}
      onClick={onClick}
      {...buttonProps}
      ref={ref}
    >
      {children}
    </button>
  );
};

RacRadixButton.displayname = "button";
export { RacRadixButton };
