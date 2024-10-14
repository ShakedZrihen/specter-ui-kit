import { styled } from '@mui/material';
import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import {
  FiltersSection,
  FiltersSectionProps,
  SelectedFilters,
} from './FiltersSection';
import type { Meta, StoryObj } from '@storybook/react';
import { CreationTimeFilter } from './Filters/CreationTimeFilter';
import { useState } from 'react';
import { omit } from 'lodash';

const meta: Meta<typeof FiltersSection> = {
  title: 'custom/FiltersSection',
  component: FiltersSection,
  argTypes: {},
  args: {
    filterName: 'לפי זמן',
    onChange(filterName, selectedValue) {
      console.log(filterName, selectedValue);
    },
    selectedFilters: {},
    filterList: [
      {
        filterName: 'creationTime',
        Component: CreationTimeFilter,
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof FiltersSection>;

export const ByTime: Story = {
  render(props) {
    const Container = styled('div')`
      width: 20rem;
    `;

    const FiltersContainer = (props: FiltersSectionProps) => {
      const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>(
        props.selectedFilters ?? {},
      );

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const updateFilters = (filterName: string, selectedFilter: any) => {
        if (filterName in selectedFilters && !selectedFilter) {
          setSelectedFilters(omit(selectedFilters, filterName));
        } else if (selectedFilter) {
          setSelectedFilters({
            ...selectedFilters,
            [filterName]: selectedFilter,
          });
        }
      };

      return (
        <Container>
          <FiltersSection
            {...props}
            selectedFilters={selectedFilters}
            onChange={updateFilters}
          />
        </Container>
      );
    };

    return (
      <SpecterTheme>
        <FiltersContainer {...props} />
      </SpecterTheme>
    );
  },
};
