import { Main } from "@/components/layout/mainwrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <Main className="py-5 space-x-4">
      <Button>
        <Link href="/vaul-menu/v1">V1</Link>
      </Button>
      <Button>
        <Link href="/vaul-menu/v2">V2</Link>
      </Button>
    </Main>
  );
}
