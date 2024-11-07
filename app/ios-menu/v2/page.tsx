import Navbar from "@/components/layout/navbar";
import Menu from "./menu";

export default function Page() {
  return (
    <>
      <div className="h-dvh w-full bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/source/e0d974193755513.65f2572fa0391.png')] bg-cover bg-center" />
      <Navbar>
        <Menu />
      </Navbar>
    </>
  );
}
