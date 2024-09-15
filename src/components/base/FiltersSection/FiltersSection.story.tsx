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
  },
};

export default meta;
type Story = StoryObj<typeof FiltersSection>;

export const Basic: Story = {
  render(props) {
    const Container = styled('div')`
      width: 30rem;
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
