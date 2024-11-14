import { Main } from "@/components/layout/mainwrapper"

import AppSkeleton from "./app-skeleton"
import FloatingNav from "./floating-nav"

export default function TestPage() {
  return (
    <Main className="relative max-w-md space-y-10 py-5">
      <AppSkeleton />
      <FloatingNav />

      {/* <DynamicIsland /> */}
    </Main>
  )
}
