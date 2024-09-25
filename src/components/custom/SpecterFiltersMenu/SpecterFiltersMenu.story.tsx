import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { SpecterFiltersMenu } from './SpecterFiltersMenu';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SpecterFiltersMenu> = {
  title: 'custom/SpecterFiltersMenu',
  component: SpecterFiltersMenu,
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof SpecterFiltersMenu>;

export const Basic: Story = {
  render(props) {
    return (
      <SpecterTheme>
        <SpecterFiltersMenu {...props} />
      </SpecterTheme>
    );
  },
};
