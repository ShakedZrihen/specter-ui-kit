import { useState } from 'react';
import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { CreationTimeFilter } from '../FiltersSection/Filters/CreationTimeFilter';
import { FiltersMenu } from './FiltersMenu';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FiltersMenu> = {
  title: 'base/FiltersMenu',
  component: FiltersMenu,
  argTypes: {},
  args: {
    filters: [
      {
        filterSectionName: 'לפי זמן',
        filterList: [
          {
            filterName: 'creationTime',
            Component: CreationTimeFilter,
          },
        ],
      },
      {
        filterSectionName: 'לפי זמן',
        filterList: [
          {
            filterName: 'creationTime',
            Component: CreationTimeFilter,
          },
        ],
      },
      {
        filterSectionName: 'לפי זמן',
        filterList: [
          {
            filterName: 'creationTime',
            Component: CreationTimeFilter,
          },
        ],
      },
      {
        filterSectionName: 'לפי זמן',
        filterList: [
          {
            filterName: 'creationTime',
            Component: CreationTimeFilter,
          },
        ],
      },
      {
        filterSectionName: 'לפי זמן',
        filterList: [
          {
            filterName: 'creationTime',
            Component: CreationTimeFilter,
          },
        ],
      },
      {
        filterSectionName: 'לפי זמן',
        filterList: [
          {
            filterName: 'creationTime',
            Component: CreationTimeFilter,
          },
        ],
      },
      {
        filterSectionName: 'לפי זמן',
        filterList: [
          {
            filterName: 'creationTime',
            Component: CreationTimeFilter,
          },
        ],
      },
      {
        filterSectionName: 'לפי זמן',
        filterList: [
          {
            filterName: 'creationTime',
            Component: CreationTimeFilter,
          },
        ],
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof FiltersMenu>;

export const Basic: Story = {
  render(props) {
    const ControlledFiltersMenu = () => {
      const [selectedFilters, setSelectedFilters] = useState({});

      return (
        <SpecterTheme>
          <FiltersMenu
            {...props}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
          <button
            style={{ marginLeft: '500px' }}
            onClick={() => alert('succeed')}
          >
            test click outside
          </button>
        </SpecterTheme>
      );
    };
    
    return <ControlledFiltersMenu />;
  },
};
