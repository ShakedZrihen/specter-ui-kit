import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { MinimizedToast } from './MinimizedToast';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MinimizedToast> = {
  title: 'components\base/MinimizedToast',
  component: MinimizedToast,
  argTypes: {},
  args: {
    amount: 4246,
    onClick: () => { alert('refreshed') },
    text: "פוסטים חדשים"
  },
};

export default meta;
type Story = StoryObj<typeof MinimizedToast>;

export const Basic: Story = {
  render(props) {
    return (
      <SpecterTheme>
        <MinimizedToast {...props} />
      </SpecterTheme>
    );
  },
};
