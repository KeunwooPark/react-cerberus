import type { Meta, StoryObj } from '@storybook/react';
import { Div } from '@react-cerberus/elements';

const meta = {
  component: Div,
} satisfies Meta<typeof Div>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RedBox: Story = {
  args: {
    style: { width: 100, height: 100, backgroundColor: 'red' },
  },
};
