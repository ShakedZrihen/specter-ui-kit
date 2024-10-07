import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { TranslationButton } from './TranslationButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TranslationButton> = {
  title: 'custom/TranslationButton',
  component: TranslationButton,
  argTypes: {
    onLanguageChange: { action: 'languageChange' },
  },
  args: {
    onLanguageChange: () => {},
    supportedLanguages: {
      content: [
        { langKey: 'en', langName: 'English' },
        { langKey: 'he', langName: 'עברית' },
        { langKey: 'default', langName: '' },
      ],
      system: [
        { langKey: 'en', langName: 'English' },
        { langKey: 'he', langName: 'עברית' },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TranslationButton>;

export const Basic: Story = {
  render: props => (
    <SpecterTheme>
      <TranslationButton {...props} />
    </SpecterTheme>
  ),
};
