import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@guaribas-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quisquam a maxime sequi corporis facilis vero laborum molestiae rerum placeat eligendi quae laudantium, dignissimos iusto blanditiis libero debitis. Ea, nobis?',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustonTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong props',
    as: 'strong',
  },
}
