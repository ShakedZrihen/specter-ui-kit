import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { SystemChip } from './SystemChip';
import type { Meta, StoryObj } from '@storybook/react';
import { BellIcon } from '../../icons';

const meta: Meta<typeof SystemChip> = {
  title: 'components\base/SystemChip',
  component: SystemChip,
  argTypes: {},
  args: {
    bgColor: '#BFECB0',
    label: "הסתיים",
    onClick: () => null,
    icon: <BellIcon color='black' size="1rem"/>
  },
};

export default meta;
type Story = StoryObj<typeof SystemChip>;

export const Basic: Story = {
  render(props) {
    return (
      <SpecterTheme>
        <SystemChip {...props} />
      </SpecterTheme>
    );
  },
};
