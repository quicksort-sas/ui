import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const title = "With a form"
export const order = 2

export default function CardForm() {
  return (
    <Card className="w-[380px] max-w-full">
      <CardHeader>
        <CardTitle>Book a strategy call</CardTitle>
        <CardDescription>Thirty minutes with a senior strategist. We read your brief first.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2"><Label htmlFor="c-name">Name</Label><Input id="c-name" placeholder="Camille Durand" /></div>
        <div className="grid gap-2"><Label htmlFor="c-mail">Work email</Label><Input id="c-mail" type="email" placeholder="camille@company.com" /></div>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="ghost">Cancel</Button>
        <Button variant="pivot">Send</Button>
      </CardFooter>
    </Card>
  )
}
