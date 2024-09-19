import { Meta, StoryObj } from '@storybook/react';
import { Topbar } from './Topbar';
import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import SpectorLogo from '../../assets/spector-logo.svg?react';

export default {
  title: 'base/Topbar',
  component: Topbar,
} as Meta;

type Story = StoryObj<typeof Topbar>;

export const Primary: Story = {
  render: () => (
    <SpecterTheme>
      <Topbar appName='ספקטר' appIcon={<SpectorLogo />} />
    </SpecterTheme>
  ),
};

export const WithSearch: Story = {
  render: () => (
    <SpecterTheme>
      <Topbar
        appName='ספקטר'
        appIcon={<SpectorLogo />}
        withSearch
        onSearch={console.log}
      />
    </SpecterTheme>
  ),
};

export const WithTranslationButton: Story = {
  render: () => (
    <SpecterTheme>
      <Topbar
        appName='ספקטר'
        appIcon={<SpectorLogo />}
        withTranslationButton
        onLanguageChange={console.log} 
      />
    </SpecterTheme>
  ),
};

export const WithSearchAndTranslationButton: Story = {
  render: () => (
    <SpecterTheme>
      <Topbar
        appName='ספקטר'
        appIcon={<SpectorLogo />}
        withSearch
        withTranslationButton
        onSearch={console.log}
        onLanguageChange={console.log}
      />
    </SpecterTheme>
  ),
};