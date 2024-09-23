import { SpecterTheme } from '../../../../context/theme/SpecterTheme';
import { AutoComplete } from './AutoComplete';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AutoComplete> = {
  title: 'components\base\AutoComplete/AutoComplete',
  component: AutoComplete,
  argTypes: {},
  args: {
    values: [
      "apple", "banana", "cherry", "date", "elderberry",
      "fig", "grape", "honeydew", "kiwi", "lemon",
      "mango", "nectarine", "orange", "papaya", "quince",
      "raspberry", "strawberry", "tangerine", "ugli", "watermelon"
    ]
  },
};

export default meta;
type Story = StoryObj<typeof AutoComplete>;

export const Basic: Story = {
  render(props) {
    return  <SpecterTheme><AutoComplete {...props} /></SpecterTheme>;
  },
};
