import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { FiltersSection } from '../FiltersSection';
import { CreationTimeFilter } from '../FiltersSection/Filters/CreationTimeFilter';
import { FiltersMenu } from './FiltersMenu';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FiltersMenu> = {
  title: 'base/FiltersMenu',
  component: FiltersMenu,
  argTypes: {},
  args: {
    filters: [
      <FiltersSection
        filterName='לפי זמן'
        onChange={(filterName, selectedValue) => {
          console.log(filterName, selectedValue);
        }}
        selectedFilters={{}}
        filterList={[
          {
            filterName: 'creationTime',
            Component: CreationTimeFilter,
          },
        ]}
      />,
    ],
  },
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
