import { CodeBlock, CodeBlockActions, CodeBlockContent, CodeBlockCopyButton, CodeBlockFooter, CodeBlockLine } from "@/components/ui/code-block"

export const title = "Line numbers and a diff"
export const description = "Mark added, removed and highlighted lines. The copy button appears on hover or focus."
export const order = 2

const after = `retriever:
  top_k: 8
  rerank: true
model: on-premise`

export default function CodeBlockLines() {
  return (
    <CodeBlock className="w-[560px] max-w-full" size="sm">
      <CodeBlockActions><CodeBlockCopyButton value={after} /></CodeBlockActions>
      <CodeBlockContent lineNumbers>
        <CodeBlockLine>retriever:</CodeBlockLine>
        <CodeBlockLine variant="removed">  top_k: 20</CodeBlockLine>
        <CodeBlockLine variant="added">  top_k: 8</CodeBlockLine>
        <CodeBlockLine variant="added">  rerank: true</CodeBlockLine>
        <CodeBlockLine variant="highlighted">model: on-premise</CodeBlockLine>
      </CodeBlockContent>
      <CodeBlockFooter>pipeline.yaml · 2 changes</CodeBlockFooter>
    </CodeBlock>
  )
}
