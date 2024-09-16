import { styled } from '@mui/material';
import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { FiltersSection } from './FiltersSection';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FiltersSection> = {
  title: 'base/FiltersSection',
  component: FiltersSection,
  argTypes: {},
  args: {
    filterName: 'לפי זמן',
    onChange(filterName, selectedValue) {
      console.log(filterName, selectedValue);
    },
  },
};

export default meta;
type Story = StoryObj<typeof FiltersSection>;

export const ByTime: Story = {
  render(props) {
    const Container = styled('div')`
      width: 20rem;
    `;

    return (
      <SpecterTheme>
        <Container>
          <FiltersSection {...props} />
        </Container>
      </SpecterTheme>
    );
  },
};
