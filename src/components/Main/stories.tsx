import { Meta, StoryObj } from '@storybook/react'
import { Main } from '.'

export default {
  title: 'Main',
  component: Main,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta<typeof Main>

export const Default: StoryObj<typeof Main> = {
  args: {
    title: 'Welcome to the Main Component',
    description: 'This is a simple main component used in our application.'
  }
}
