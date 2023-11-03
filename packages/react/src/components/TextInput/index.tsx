import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Container, Input, Label, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  label?: string
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, label, ...props }: TextInputProps, ref) => {
    return (
      <Container>
        {!!label && <Label>{label}</Label>}
        <TextInputContainer>
          {!!prefix && <Prefix>{prefix}</Prefix>}
          <Input ref={ref} {...props} />
        </TextInputContainer>
      </Container>
    )
  },
)

TextInput.displayName = 'TextInput'
