import styled from '@emotion/styled';
import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { AutoComplete } from './AutoComplete';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AutoComplete> = {
  title: 'base/AutoComplete',
  component: AutoComplete,
  argTypes: {},
  args: {
    values: [
      'תפוח',
      'בננה',
      'תות',
      'אבטיח',
      'ענבים',
      'מלון',
      'אננס',
      'אפרסק',
      'שזיף',
      'קיווי',
      'מנגו',
      'אגס',
      'תאנה',
      'רימון',
      'לימון',
      'תפוז',
      'אשכולית',
      'קלמנטינה',
      'שסק',
      'פפאיה',
    ],
    label: 'פרטים לא רלוונטים',
  },
};

export default meta;
type Story = StoryObj<typeof AutoComplete>;

export const Basic: Story = {
  render(props) {
    const StyledContainer = styled('div')``;
    return (
      <SpecterTheme>
        <StyledContainer>
          <AutoComplete {...props} />
        </StyledContainer>
      </SpecterTheme>
    );
  },
};
