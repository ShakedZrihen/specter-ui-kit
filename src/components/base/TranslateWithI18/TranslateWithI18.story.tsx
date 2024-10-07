import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { TranslateWithI18 } from './TranslateWithI18';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TranslateWithI18> = {
  title: 'Components/TranslateWitchI18',
  component: TranslateWithI18,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof TranslateWithI18>;

export const Basic: Story = {
  args: {},
  render: args => (
    <SpecterTheme>
      <TranslateWithI18 {...args} />
    </SpecterTheme>
  ),
};
