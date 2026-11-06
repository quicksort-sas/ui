import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const title = "Several open"
export const description = "Pass multiple to let readers open more than one section."
export const order = 2

const steps = [
  { title: "Diagnostic", body: "2 to 4 weeks with your teams to find where AI pays off." },
  { title: "Pilot", body: "6 to 8 weeks on live data, with a small group of users and clear success criteria." },
  { title: "Roll-out", body: "Deployment region by region, with training, monitoring and a named owner on your side." },
]

export default function AccordionMultiple() {
  return (
    <Accordion multiple defaultValue={["s0", "s1"]} className="w-[620px] max-w-full">
      {steps.map((s, i) => (
        <AccordionItem key={s.title} value={`s${i}`}>
          <AccordionTrigger>
            <span className="flex items-baseline gap-4"><span className="num text-xs text-faint">0{i + 1}</span>{s.title}</span>
          </AccordionTrigger>
          <AccordionContent className="pl-9">{s.body}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
