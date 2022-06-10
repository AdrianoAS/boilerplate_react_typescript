import { ComponentStory, ComponentMeta } from '@storybook/react'

import MyButton from '.'

export default {
  title: 'Button component',
  component: MyButton
} as ComponentMeta<typeof MyButton>

export const Button: ComponentStory<typeof MyButton> = args => (
  <MyButton {...args} />
)
