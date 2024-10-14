import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { SmallNotification } from './SmallNotification';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SmallNotification> = {
  title: 'custom/SmallNotification',
  component: SmallNotification,
  argTypes: {},
  args: {
    label: '4,246 פרטים נוספים נקצרו',
    title: 'שימו לב',
    buttonLabel: 'ריענון',
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
