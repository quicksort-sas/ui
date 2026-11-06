import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"

export const title = "Sign in to the client portal"
export const order = 2

export default function InputOTPField() {
  return (
    <Field className="w-fit">
      <FieldLabel htmlFor="otp-portal">Code from your email</FieldLabel>
      <InputOTP id="otp-portal" maxLength={6} defaultValue="4821">
        <InputOTPGroup>
          {[0, 1, 2, 3, 4, 5].map((i) => <InputOTPSlot key={i} index={i} />)}
        </InputOTPGroup>
      </InputOTP>
      <FieldDescription>Sent to c.durand@banque-delorme.fr. It expires in 10 minutes.</FieldDescription>
    </Field>
  )
}
