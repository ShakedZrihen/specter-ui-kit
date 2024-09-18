import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { FilterByChips } from './FilterByChips';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FilterByChips> = {
  title: 'base/FilterByChips',
  component: FilterByChips,
  argTypes: {},
  args: {
    appliedFilters: ['זמן כניסה למערכת', 'זמן יצירה'],
  },
};

export default meta;
type Story = StoryObj<typeof FilterByChips>;

export const Basic: Story = {
  render(props) {
    return (
      <SpecterTheme>
        <FilterByChips {...props} />
      </SpecterTheme>
    );
  },
};
