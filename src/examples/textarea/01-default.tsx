import { Textarea } from "@/components/ui/textarea"

export const title = "Default"
export const order = 1

export default function TextareaDefault() {
  return <Textarea className="w-[420px] max-w-full" placeholder="What decision do you need to make, and by when?" aria-label="Your question" />
}
