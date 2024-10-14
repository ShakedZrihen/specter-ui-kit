
import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { ToggleButton } from './ToggleButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ToggleButton> = {
  title: 'components\base/ToggleButton',
  component: ToggleButton,
  argTypes: {},
  args: {
    active:true,
    inactiveLabel: "Off",
    activeLabel: "On",
    onToggle: (newIsActive) => {console.log({newIsActive})}
  },
};

export default meta;
type Story = StoryObj<typeof ToggleButton>;

export const Basic: Story = {
  render(props) {
    return (
      <SpecterTheme>
        <ToggleButton {...props} />
      </SpecterTheme>
    );
  },
};
