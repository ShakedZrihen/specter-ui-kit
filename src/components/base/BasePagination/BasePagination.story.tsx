import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { BasePagination } from './BasePagination';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BasePagination> = {
  title: 'base/BasePagination',
  component: BasePagination,
  argTypes: {},
  args: {
    component: 'div',
    count: 100,
    page: 1,
    onPageChange: console.log,
    rowsPerPage: 50,
    onRowsPerPageChange: console.log,
  },
};

export default meta;
type Story = StoryObj<typeof BasePagination>;

export const Basic: Story = {
  render(props) {
    return (
      <SpecterTheme>
        <BasePagination {...props} />
      </SpecterTheme>
    );
  },
};
