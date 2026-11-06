import { Bubble, BubbleContent, BubbleGroup, BubbleReactions } from "@/components/ui/bubble"

export const title = "Group and reactions"
export const description = "Consecutive bubbles from the same side sit close together."
export const order = 2

export default function BubbleGroupExample() {
  return (
    <div className="grid w-[560px] max-w-full gap-6">
      <BubbleGroup>
        <Bubble variant="assistant"><BubbleContent>I checked the file against policy v4.2.</BubbleContent></Bubble>
        <Bubble variant="assistant"><BubbleContent>One exception: the guarantee from the parent company expires before the loan does.</BubbleContent></Bubble>
      </BubbleGroup>
      <Bubble variant="user" align="end">
        <BubbleContent>Good catch. Add it to the memo.</BubbleContent>
        <BubbleReactions align="start">+1</BubbleReactions>
      </Bubble>
    </div>
  )
}
