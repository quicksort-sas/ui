import {
  Questionnaire, QuestionnaireActions, QuestionnaireChoice, QuestionnaireChoiceDescription, QuestionnaireChoices,
  QuestionnaireDescription, QuestionnaireInput, QuestionnaireItem, QuestionnaireNext, QuestionnairePrevious,
  QuestionnaireProgress, QuestionnaireSkip, QuestionnaireSubmit, QuestionnaireTitle,
} from "@/components/ui/questionnaire"

export const title = "Scoping a deployment"
export const description = "The assistant asks a few questions before it plans the rollout. Choices answer to letter keys."
export const order = 1

export default function QuestionnaireScoping() {
  return (
    <Questionnaire shortcuts="letters" className="w-[520px] max-w-full" onSubmit={(e) => e.preventDefault()}>
      <QuestionnaireProgress />
      <QuestionnaireItem name="hosting" required>
        <QuestionnaireTitle>Where should the credit-review assistant run?</QuestionnaireTitle>
        <QuestionnaireDescription>This decides which models we can use and who signs off.</QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="own">On the bank's own servers<QuestionnaireChoiceDescription>Models run inside your data centre. Nothing leaves.</QuestionnaireChoiceDescription></QuestionnaireChoice>
          <QuestionnaireChoice value="private">In your private cloud<QuestionnaireChoiceDescription>Your tenant, your keys, EU region.</QuestionnaireChoiceDescription></QuestionnaireChoice>
          <QuestionnaireChoice value="managed">Managed by Quicksort<QuestionnaireChoiceDescription>Hosted in France, under contract.</QuestionnaireChoiceDescription></QuestionnaireChoice>
        </QuestionnaireChoices>
      </QuestionnaireItem>
      <QuestionnaireItem name="documents" multiple>
        <QuestionnaireTitle>Which documents will it read?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="credit">Credit files</QuestionnaireChoice>
          <QuestionnaireChoice value="statements">Financial statements</QuestionnaireChoice>
          <QuestionnaireChoice value="contracts">Loan agreements</QuestionnaireChoice>
          <QuestionnaireChoice value="policy">Internal risk policy</QuestionnaireChoice>
        </QuestionnaireChoices>
      </QuestionnaireItem>
      <QuestionnaireItem name="users">
        <QuestionnaireTitle>How many people will use it?</QuestionnaireTitle>
        <QuestionnaireInput type="number" placeholder="320" />
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireSkip />
        <QuestionnaireNext>Continue</QuestionnaireNext>
        <QuestionnaireSubmit>Plan the rollout</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  )
}
