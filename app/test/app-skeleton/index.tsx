export default function AppSkeleton() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="h-10 w-32 rounded-md bg-secondary"></div>
        <div className="size-12 rounded-full bg-secondary"></div>
      </div>
      <div className="h-48 w-full rounded-md bg-secondary" />
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="h-7 w-48 rounded bg-secondary"></div>
          <div className="size-8 rounded-sm bg-secondary/80"></div>
        </div>

        <div className="flex flex-col gap-1">
          {Array.from({ length: 5 }, (_, idx) => (
            <div className="h-16 rounded-md bg-secondary" key={idx} />
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="h-7 w-48 rounded bg-secondary"></div>
          <div className="size-8 rounded-sm bg-secondary/80"></div>
        </div>

        <div className="h-32 w-full rounded-md bg-secondary" />
      </div>
    </>
  )
}
