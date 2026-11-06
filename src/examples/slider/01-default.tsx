import { Slider } from "@/components/ui/slider"

export const title = "Default"
export const order = 1

export default function SliderDefault() {
  return (
    <div className="w-[320px] max-w-full">
      <Slider defaultValue={[40]} aria-label="Share of files reviewed by the assistant" />
    </div>
  )
}
