import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'
import { CheckBoxContainer, CheckBoxIndication } from './styles'

export interface CheckboxProps
  extends ComponentProps<typeof CheckBoxContainer> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckBoxContainer {...props}>
      <CheckBoxIndication asChild>
        <Check weight="bold" />
      </CheckBoxIndication>
    </CheckBoxContainer>
  )
}

Checkbox.displayName = 'Checkbox'
