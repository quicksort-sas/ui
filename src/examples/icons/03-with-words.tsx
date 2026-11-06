import { BankIcon, FactoryIcon, InsuranceIcon, ServerIcon } from "@/components/quicksort/icons"

export const title = "Next to a word"
export const description = "Icons always sit next to a word, never alone as decoration."
export const order = 3

const sectors = [
  { Icon: BankIcon, name: "Banks", detail: "Credit review, KYC, covenant monitoring" },
  { Icon: InsuranceIcon, name: "Insurers", detail: "Claims triage, underwriting notes" },
  { Icon: FactoryIcon, name: "Industry", detail: "Maintenance logs, supplier contracts" },
  { Icon: ServerIcon, name: "On your servers", detail: "Models run inside your own infrastructure" },
]

export default function IconsWithWords() {
  return (
    <ul className="grid w-[520px] max-w-full gap-5">
      {sectors.map(({ Icon, name, detail }) => (
        <li key={name} className="flex items-start gap-4">
          <Icon size={24} className="mt-0.5" />
          <span className="grid gap-0.5">
            <span className="text-[15px] font-medium">{name}</span>
            <span className="text-sm text-muted-foreground">{detail}</span>
          </span>
        </li>
      ))}
    </ul>
  )
}
