import { MenuProvider } from "@/app/components/fullscreen-menu/Menu";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MenuProvider>{children}</MenuProvider>
    </>
  );
}
