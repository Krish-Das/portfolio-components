import { Main } from "@/components/layout/mainwrapper"

import AppSkeleton from "./app-skeleton"
import { TwitterFabAnimationV2 } from "./twitter-fab"

export default function TestPage() {
  return (
    <Main className="max-w-md space-y-10 py-5">
      <AppSkeleton />
      {/* <DynamicIsland /> */}
      <TwitterFabAnimationV2 />
    </Main>
  )
}
