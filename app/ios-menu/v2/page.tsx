import Navbar from "@/components/layout/navbar"
import Menu from "./menu"

// NOTE: Iages
// 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/376382196748093.66255f46ea2bc.jpg' <<
// 'https://mir-s3-cdn-cf.behance.net/project_modules/source/c7499d183690631.654940fde9335.gif' // Light
// 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/9769f8113157631.60226ab1f3658.jpg' // light

export default function Page() {
  return (
    <>
      <div className="h-dvh w-full bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/9769f8113157631.60226ab1f3658.jpg')] bg-cover bg-center" />
      <Navbar>
        <Menu />
      </Navbar>
    </>
  )
}
