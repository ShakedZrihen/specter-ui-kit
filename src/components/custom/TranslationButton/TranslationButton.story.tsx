import React from 'react';
import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { TranslationButton } from './TranslationButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TranslationButton> = {
  title: 'custom/TranslationButton',
  component: TranslationButton,
  argTypes: {
    onLanguageChange: { action: 'languageChange' },
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
  args: {
    onLanguageChange: language =>
      console.log(`Language changed to: ${language}`),
    supportedLanguages: ['en', 'ar', 'he'],
  },
};
