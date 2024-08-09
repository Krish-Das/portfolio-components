import { Main } from "@/components/layout/mainwrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <Main>
      <h1>Project Apollo</h1>
      <p>
        A cutting-edge real-time collaboration app designed to supercharge
        productivity.
      </p>

      <Button asChild>
        <Link href="/components">Go to components</Link>
      </Button>
    </Main>
  );
}
