import type { Meta, StoryObj } from '@storybook/react';
import { CerberusStyle, Span } from '@react-cerberus/elements';

const meta = {
  component: Span,
} satisfies Meta<typeof Span>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a default span.',
  },
};

const fontStyle: CerberusStyle = {
  color: 'red',
  fontSize: '25px',
  fontFamily: 'Arial',
};
export const FontStyles: Story = {
  args: {
    children: `This is a span with font styles (${JSON.stringify(fontStyle)}).`,
    style: fontStyle,
  },
};
