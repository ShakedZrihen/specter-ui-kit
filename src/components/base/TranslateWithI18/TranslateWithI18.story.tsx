import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { TranslateWithI18 } from './TranslateWithI18';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TranslateWithI18> = {
  title: 'Components/TranslateWitchI18',
  component: TranslateWithI18,
  argTypes: {
    textKey: {
      control: {
        type: 'select',
        options: ['filters,save_button,cancel_button'],
      },
    },
    language: {
      control: {
        type: 'select',
        options: ['he', 'en'],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TranslateWithI18>;

export const Basic: Story = {
  args: {
    textKey: 'filters',
    language: 'he', 
  },
  render: (args) => (
    <SpecterTheme>
      <TranslateWithI18 {...args} />
    </SpecterTheme>
  ),
};
