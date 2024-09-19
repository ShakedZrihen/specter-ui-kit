import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { SidebarMenu } from './SidebarMenu';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SidebarMenu> = {
  title: 'custom/SidebarMenu',
  component: SidebarMenu,
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof SidebarMenu>;

export const Basic: Story = {
  render(props) {
    return (
      <SpecterTheme>
        <SidebarMenu {...props} />
      </SpecterTheme>
    );
  },
};
