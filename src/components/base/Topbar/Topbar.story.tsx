import { Meta, StoryObj } from '@storybook/react';
import { Topbar } from './Topbar'; // Assuming the Topbar component is in the same directory
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
