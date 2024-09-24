import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { SmallNotification } from './SmallNotification';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SmallNotification> = {
  title: 'components\base/SmallNotification',
  component: SmallNotification,
  argTypes: {},
  args: {
    amountOfNewPosts: 4246
  },
};

export default meta;
type Story = StoryObj<typeof SmallNotification>;

export const Basic: Story = {
  render(props) {
    return (
      <SpecterTheme>
        <SmallNotification {...props} />
      </SpecterTheme>
    );
  },
};
