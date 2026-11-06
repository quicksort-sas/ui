"use client"

import * as React from "react"
import { Combobox, ComboboxChip, ComboboxChips, ComboboxChipsInput, ComboboxContent, ComboboxEmpty, ComboboxItem, ComboboxList, ComboboxValue, useComboboxAnchor } from "@/components/ui/combobox"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"

export const title = "Multiple, with chips"
export const order = 2

const teams = ["Credit risk", "Compliance", "Corporate banking", "Retail banking", "Operations", "IT security", "Legal"]

export default function ComboboxMultiple() {
  const anchor = useComboboxAnchor()
  return (
    <Field className="w-[380px] max-w-full">
      <FieldLabel htmlFor="cb-teams">Teams in the pilot</FieldLabel>
      <Combobox multiple autoHighlight items={teams} defaultValue={["Credit risk", "Compliance"]}>
        <ComboboxChips ref={anchor}>
          <ComboboxValue>
            {(values: string[]) => (
              <React.Fragment>
                {values.map((v) => <ComboboxChip key={v}>{v}</ComboboxChip>)}
                <ComboboxChipsInput id="cb-teams" placeholder={values.length ? "" : "Add a team"} />
              </React.Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent anchor={anchor}>
          <ComboboxEmpty>No team found.</ComboboxEmpty>
          <ComboboxList>
            {(item: string) => <ComboboxItem key={item} value={item}>{item}</ComboboxItem>}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <FieldDescription>We interview two people from each team in week one.</FieldDescription>
    </Field>
  )
}
