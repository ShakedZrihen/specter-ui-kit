import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { Error } from './Error';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Error> = {
  title: 'custom/Error',
  component: Error,
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof Error>;

export const Basic: Story = {
  render(props) {
    return (
      <SpecterTheme>
        <Error {...props} />
      </SpecterTheme>
    );
  },
};
