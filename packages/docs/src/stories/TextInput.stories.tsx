import type { StoryObj, Meta } from '@storybook/react'
import { Box, TextInput, TextInputProps } from '@guaribas-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {
    label: 'Email address',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'guaribas.dev/',
    placeholder: 'your-username',
  },
}
