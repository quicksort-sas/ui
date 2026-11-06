import { FileSearchIcon } from "lucide-react"
import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"

export const title = "Variants"
export const description = "Plain for status, separator for a day or a reset, border to close a section."
export const order = 1

export default function MarkerVariants() {
  return (
    <div className="grid w-[560px] max-w-full gap-8">
      <Marker>
        <MarkerIcon><FileSearchIcon /></MarkerIcon>
        <MarkerContent>Read <b>3 files</b> from the credit folder</MarkerContent>
      </Marker>
      <Marker variant="separator"><MarkerContent>Today</MarkerContent></Marker>
      <Marker variant="border"><MarkerContent>Claire shared this conversation with the risk team</MarkerContent></Marker>
    </div>
  )
}
