import { Meta, StoryObj } from '@storybook/react';
import { Topbar } from './Topbar';
import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import SpectorLogo from '../../assets/spector-logo.svg?react';

export default {
  title: 'base/Topbar',
  component: Topbar,
} as Meta;

type Story = StoryObj<typeof Topbar>;

const Logo = (
  <SpectorLogo
    style={{
      width: '1.6rem',
      height: '1.6rem',
    }}
  />
);

export const Primary: Story = {
  render: () => (
    <SpecterTheme>
      <Topbar appName='ספקטר' appIcon={Logo} />
    </SpecterTheme>
  ),
};

export const WithSearch: Story = {
  render: () => (
    <SpecterTheme>
      <Topbar
        appName='ספקטר'
        appIcon={Logo}
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
        appIcon={Logo}
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
        appIcon={Logo}
        withSearch
        withTranslationButton
        onSearch={console.log}
        onLanguageChange={console.log}
      />
    </SpecterTheme>
  ),
};
