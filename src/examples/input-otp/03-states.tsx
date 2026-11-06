import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"

export const title = "States"
export const order = 3

export default function InputOTPStates() {
  const slots = [0, 1, 2, 3, 4, 5]
  return (
    <div className="grid gap-8">
      <Field data-invalid className="w-fit">
        <FieldLabel htmlFor="otp-bad">Verification code</FieldLabel>
        <InputOTP id="otp-bad" maxLength={6} defaultValue="190372">
          <InputOTPGroup>{slots.map((i) => <InputOTPSlot key={i} index={i} aria-invalid />)}</InputOTPGroup>
        </InputOTP>
        <FieldError>This code doesn't match. Check the latest email.</FieldError>
      </Field>
      <Field data-disabled className="w-fit">
        <FieldLabel htmlFor="otp-off">Verification code</FieldLabel>
        <InputOTP id="otp-off" maxLength={6} disabled>
          <InputOTPGroup>{slots.map((i) => <InputOTPSlot key={i} index={i} />)}</InputOTPGroup>
        </InputOTP>
      </Field>
    </div>
  )
}
