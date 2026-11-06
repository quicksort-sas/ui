import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"

export const title = "Ingestion"
export const description = "A 4px track in the border colour with an ink bar. Show the real numbers, not only a percentage."
export const order = 1

export default function ProgressIngestion() {
  return (
    <Progress value={2350} max={3232} className="w-[440px] max-w-full">
      <ProgressLabel>Ingestion</ProgressLabel>
      <ProgressValue>{() => "2,350 of 3,232 pages"}</ProgressValue>
    </Progress>
  )
}
