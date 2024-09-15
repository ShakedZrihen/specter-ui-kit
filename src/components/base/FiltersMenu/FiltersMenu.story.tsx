import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { FiltersMenu } from './FiltersMenu';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FiltersMenu> = {
  title: 'base/FiltersMenu',
  component: FiltersMenu,
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof FiltersMenu>;

export const Basic: Story = {
  render(props) {
    return (
      <SpecterTheme>
        <FiltersMenu {...props} />
      </SpecterTheme>
    );
  },
};
