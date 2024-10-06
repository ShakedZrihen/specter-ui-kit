import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { TranslateWitchI18 } from './TranslateWitchI18';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TranslateWitchI18> = {
  title: 'Components/TranslateWitchI18',
  component: TranslateWitchI18,
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

type Story = StoryObj<typeof TranslateWitchI18>;

export const Basic: Story = {
  args: {
    textKey: 'filters',
    language: 'he', 
  },
  render: (args) => (
    <SpecterTheme>
      <TranslateWitchI18 {...args} />
    </SpecterTheme>
  ),
};
