import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { TextWithHighlights } from './TextWithHighlights';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextWithHighlights> = {
  title: 'base/TextWithHighlights',
  component: TextWithHighlights,
  argTypes: {},
  args: {
    text: 'הנה טקסט עם כמה מילים שונות',
    highlightedText: ['מילים'],
  },
};

export default meta;
type Story = StoryObj<typeof TextWithHighlights>;

export const Basic: Story = {
  render(props) {
    return (
      <SpecterTheme>
        <TextWithHighlights {...props} />
      </SpecterTheme>
    );
  },
};
