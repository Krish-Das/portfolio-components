import { Button } from "@/app/components/buttons/ButtonV2";
import { MaterialSymbolsRectangleRounded } from "@/app/components/icons/material-symbols";

export default function VaulSidebar() {
  return (
    <>
      <Button className="bg-background/0 [--bg-tap-end:#00000000]" size="icon">
        <MaterialSymbolsRectangleRounded />
      </Button>
    </>
  );
}
