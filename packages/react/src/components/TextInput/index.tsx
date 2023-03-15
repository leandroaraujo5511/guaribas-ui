import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Input, Prefix, TextInputContaienr } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContaienr>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContaienr>
    )
  },
)

TextInput.displayName = 'TextInput'
