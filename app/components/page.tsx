import { Main } from "@/components/layout/mainwrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RiArrowRightDownLine } from "react-icons/ri";

export default function ComponentPage() {
  return (
    <>
      <Main>
        <h2>Button</h2>

        <HeroButton />
      </Main>
    </>
  );
}

const HeroButton = ({ className }: { className?: string }) => {
  return (
    <Button
      className={cn(
        "h-9 rounded-full bg-foreground px-5 font-[400] leading-none text-background",
        className,
      )}
    >
      Enter <RiArrowRightDownLine />
    </Button>
  );
};
