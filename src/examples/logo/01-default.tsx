import { QuicksortLogo } from "@/components/quicksort/logo"

export const title = "Logo"
export const description = "The mark and the wordmark in Martian Mono. The full logo stays at least 20px high."
export const order = 1

export default function LogoDefault() {
  return (
    <div className="flex flex-wrap items-end gap-12">
      <QuicksortLogo className="text-[13px]" />
      <QuicksortLogo className="text-[17px]" />
      <QuicksortLogo className="text-[24px]" />
    </div>
  )
}
