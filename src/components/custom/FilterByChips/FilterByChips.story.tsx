import { useState } from 'react';
import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { FilterByChips } from './FilterByChips';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FilterByChips> = {
  title: 'custom/FilterByChips',
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
    const FilterByChipsControlled = ({
      appliedFilters: defaultAppliedFilters,
    }: {
      appliedFilters: string[];
    }) => {
      const [appliedFilters, setAppliedFilters] = useState<string[]>(
        defaultAppliedFilters,
      );

      return (
        <FilterByChips
          {...props}
          appliedFilters={appliedFilters}
          onDeleteFilter={filterName => {
            console.log({ filterName, defaultAppliedFilters });
            setAppliedFilters(
              appliedFilters.filter(filter => filter != filterName),
            );
          }}
          onClearFilters={() => setAppliedFilters([])}
        />
      );
    };
    return (
      <SpecterTheme>
        <FilterByChipsControlled {...props} />
      </SpecterTheme>
    );
  },
};
