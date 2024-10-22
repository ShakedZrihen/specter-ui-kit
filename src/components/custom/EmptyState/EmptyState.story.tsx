import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { EmptyState } from './EmptyState';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EmptyState> = {
  title: 'components\base/EmptyState',
  component: EmptyState,
  argTypes: {},
  args: {
    label: 'מצב הרעב בעזה',
  },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Basic: Story = {
  render(props) {
    return (
      <SpecterTheme>
        <EmptyState {...props} />
      </SpecterTheme>
    );
  },
};
