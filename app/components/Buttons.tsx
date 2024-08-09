import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IoPlay } from "react-icons/io5";
import { RiArrowRightDownLine } from "react-icons/ri";

const ButtonDefault = ({ className }: { className?: string }) => {
  return (
    <Button
      className={cn(
        "inline-flex h-9 items-center justify-center gap-1 rounded-full bg-foreground px-5 font-[400] leading-none text-background",
        className,
      )}
    >
      Enter <RiArrowRightDownLine />
    </Button>
  );
};

const ButtonSmall = ({ className }: { className?: string }) => {
  return (
    <Button
      className={cn(
        "inline-flex h-8 items-center justify-center gap-1 rounded-full bg-foreground px-4 font-[400] leading-none text-background",
        className,
      )}
    >
      Enter <IoPlay size={10} />
    </Button>
  );
};

export { ButtonSmall, ButtonDefault };
