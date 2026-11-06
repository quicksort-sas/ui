import { CodeBlock, CodeBlockActions, CodeBlockContent, CodeBlockCopyButton, CodeBlockHeader, CodeBlockTitle } from "@/components/ui/code-block"

export const title = "With a title"
export const description = "An ink panel in both themes, like the code on these pages."
export const order = 1

const code = `import { DatePicker } from "@/components/ui/date-picker"

export function WorkshopDate() {
  return <DatePicker placeholder="Workshop date" />
}`

export default function CodeBlockDefault() {
  return (
    <CodeBlock className="w-[560px] max-w-full">
      <CodeBlockHeader>
        <CodeBlockTitle>workshop-date.tsx</CodeBlockTitle>
        <CodeBlockActions><CodeBlockCopyButton value={code} /></CodeBlockActions>
      </CodeBlockHeader>
      <CodeBlockContent>{code}</CodeBlockContent>
    </CodeBlock>
  )
}
