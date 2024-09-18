import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { TranslationButton } from './TranslationButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TranslationButton> = {
  title: 'components\base/TranslationButton',
  component: TranslationButton,
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof TranslationButton>;

export const Basic: Story = {
  render(props) {
    return (
      <SpecterTheme>
        <TranslationButton {...props} />
      </SpecterTheme>
    );
  },
};
