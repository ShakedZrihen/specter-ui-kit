import { useState } from 'react';
import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { FilterByChips } from './FilterByChips';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FilterByChips> = {
  title: 'custom/FilterByChips',
  component: FilterByChips,
  argTypes: {},
  args: {
    appliedFilters: {
      creationTimeStart: '2024-10-16T21:00:00.000Z',
      platformType: ['facebook', 'instagram'],
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
          return Array.isArray(value) ? value : [value];
        }),
      );

      return (
        <FilterByChips
          {...props}
          appliedFilters={appliedFilters}
          onDeleteFilter={filterName => {
            setAppliedFilters(prevFilters =>
              prevFilters.filter(filter => filter !== filterName),
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
