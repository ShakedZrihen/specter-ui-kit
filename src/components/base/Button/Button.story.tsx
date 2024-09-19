import type { Meta, StoryObj } from '@storybook/react';
import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { DocumetsIcon } from '../../icons';
import { Button } from './Button';
import { colorPalette } from '../../../context/theme/lightMode';

const meta: Meta<typeof Button> = {
  title: 'base/Button',
  component: Button,
  argTypes: {},
  args: {
    startIcon: <DocumetsIcon color={colorPalette.link.color} size={20} />,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  render(props) {
    return (
      <SpecterTheme>
        <Button variant='outlined' {...props}>
          שמירה לאוספים
        </Button>
      </SpecterTheme>
    );
  },
};
