"use client"

import * as React from "react"
import { CheckIcon, CopyIcon } from "lucide-react"
import { Field, FieldLabel } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group"

export const title = "With a button"
export const order = 3

export default function InputGroupWithButton() {
  const [copied, setCopied] = React.useState(false)
  return (
    <Field className="w-[380px] max-w-full">
      <FieldLabel htmlFor="ig-key">Deployment key</FieldLabel>
      <InputGroup>
        <InputGroupInput id="ig-key" readOnly defaultValue="qs_live_8f2c41d09a7e" className="font-mono text-sm" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            size="icon-xs"
            aria-label={copied ? "Copied" : "Copy key"}
            onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 1600) }}
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}
