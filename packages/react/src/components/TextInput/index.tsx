import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Container, Input, Label, Prefix, TextInputContainer } from './styles'

export interface TextInputProps
  extends Omit<ComponentProps<typeof Input>, 'size'> {
  prefix?: string
  size?: ComponentProps<typeof TextInputContainer>['size']
  label?: string
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, label, size, ...props }, ref) => {
    return (
      <Container>
        {!!label && <Label>{label}</Label>}
        <TextInputContainer size={size}>
          {!!prefix && <Prefix>{prefix}</Prefix>}
          <Input ref={ref} {...props} />
        </TextInputContainer>
      </Container>
    )
  },
)

TextInput.displayName = 'TextInput'
