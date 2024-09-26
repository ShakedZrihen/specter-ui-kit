import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { Dropzone } from './Dropzone';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Dropzone> = {
  title: 'components\base/Dropzone',
  component: Dropzone,
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof Dropzone>;

export const Basic: Story = {
  render(props) {
    return (
      <SpecterTheme>
        <Dropzone {...props} />
      </SpecterTheme>
    );
  },
};
