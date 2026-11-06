import { Input } from "@/components/ui/input"

export const title = "Default"
export const order = 1

export default function InputDefault() {
  return <Input className="w-[320px] max-w-full" type="email" placeholder="camille@company.com" aria-label="Work email" />
}
