import Navigation from "@/app/components/fullscreen-menu/Navigation";
import { SystemUiconsDisplayAlt } from "../components/icons/system-ui";
import { Button } from "@/app/components/buttons/ButtonV2";

export default function Page() {
  return (
    <>
      <Navigation />
      <Children />
    </>
  );
}

/*
 * a Placeholder for the childrens
 */
function Children() {
  return (
    <main className="h-[100dvh] w-full transition-all">
      <section className="grid h-full w-full place-items-center bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/4edaef206261021.66f7b8796624f.png')] bg-cover bg-center">
        <Button>
          <SystemUiconsDisplayAlt /> Enter
        </Button>
      </section>
      <section className="grid h-full w-full place-items-center bg-[url('https://assets.awwwards.com/awards/images/2024/06/metalab-cs-cover.jpg')] bg-cover bg-center" />
    </main>
  );
}
