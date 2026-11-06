import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"

export const title = "Stages, with the key one in lime"
export const description = "Use the pivot variant for the one figure that matters, here the finished evaluation."
export const order = 2

const stages = [
  { label: "Evaluation", value: 100, text: "412 of 412 cases", pivot: true },
  { label: "Ingestion", value: 73, text: "2,350 of 3,232 pages" },
  { label: "User testing", value: 25, text: "8 of 32 analysts" },
]

export default function ProgressStages() {
  return (
    <div className="grid w-[440px] max-w-full gap-6">
      {stages.map((s) => (
        <Progress key={s.label} value={s.value} variant={s.pivot ? "pivot" : "default"}>
          <ProgressLabel>{s.label}</ProgressLabel>
          <ProgressValue>{() => s.text}</ProgressValue>
        </Progress>
      ))}
    </div>
  )
}
