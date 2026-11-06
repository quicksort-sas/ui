import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const title = "FAQ"
export const description = "Hairline separators, 18px questions, 15px answers in stone."
export const order = 1

const faq = [
  { q: "How long does a diagnostic take?", a: "2 to 4 weeks. We interview the teams involved, map the processes worth automating and leave you with a ranked list of use cases, each with an estimate of cost and return." },
  { q: "Can the models run on our own servers?", a: "Yes. Most of our banking and insurance clients run open-weight models inside their own infrastructure, so no data leaves their network." },
  { q: "Who owns what we build together?", a: "You do. Code, prompts, evaluation sets and documentation are handed over at the end of every engagement." },
  { q: "Do you work outside Paris?", a: "Our team is based in Paris and works with clients across France and Europe, on site or remote." },
]

export default function AccordionFaq() {
  return (
    <Accordion defaultValue={["q0"]} className="w-[620px] max-w-full border-t border-border">
      {faq.map((item, i) => (
        <AccordionItem key={item.q} value={`q${i}`}>
          <AccordionTrigger>{item.q}</AccordionTrigger>
          <AccordionContent>{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
