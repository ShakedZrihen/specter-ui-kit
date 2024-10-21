import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { ErrorState } from './ErrorState';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ErrorState> = {
  title: 'components\base/ErrorState',
  component: ErrorState,
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof ErrorState>;

export const Basic: Story = {
  render(props) {
    return (
      <SpecterTheme>
        <ErrorState />
      </SpecterTheme>
    );
  },
};
