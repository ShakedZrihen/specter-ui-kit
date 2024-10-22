import { useState } from 'react';
import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { FilterByChips } from './FilterByChips';
import type { Meta, StoryObj } from '@storybook/react';
import { format } from 'date-fns';

const meta: Meta<typeof FilterByChips> = {
  title: 'custom/FilterByChips',
  component: FilterByChips,
  argTypes: {},
  args: {
    appliedFilters: {
      creationTimeStart: "2024-10-16T21:00:00.000Z",
      platformType: ['facebook', 'instagram']
    },
  },
};

export default meta;
type Story = StoryObj<typeof FilterByChips>;

export const Basic: Story = {
  render(props) {
    const FilterByChipsControlled = ({
      appliedFilters: defaultAppliedFilters,
    }: {
      appliedFilters: Object;
    }) => {
      const [appliedFilters, setAppliedFilters] = useState<string[]>(
        Object.entries(defaultAppliedFilters).flatMap(([key, value]) => {
          if (key === 'creationTimeStart' || key === 'creationTimeEnd') {
            return [`מתאריך: ${format(new Date(value), 'dd/MM/yyyy')}`];
          }
          return Array.isArray(value) ? value : [value.toString()];
        })
      );
      
      return (
        <FilterByChips
          {...props}
          appliedFilters={appliedFilters}
          onDeleteFilter={filterName => {
          setAppliedFilters((prevFilters) => prevFilters.filter(filter => filter !== filterName));
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
