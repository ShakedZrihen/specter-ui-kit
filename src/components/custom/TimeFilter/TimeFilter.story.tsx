import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { TimeFilter } from './TimeFilter';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TimeFilter> = {
  title: 'custom/TimeFilter',
  component: TimeFilter,
  argTypes: {},
  args: {
    label: 'זמן כניסה למערכת',
    value: undefined,
    onChange: (date: string | null | undefined) => {
      alert(date);
    },
  },
};

export default meta;
type Story = StoryObj<typeof TimeFilter>;

export const Basic: Story = {
  render(props) {
    return (
      <SpecterTheme>
        <TimeFilter {...props} />
      </SpecterTheme>
    );
  },
};
