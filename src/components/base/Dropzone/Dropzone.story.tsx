import React from 'react';
import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { Dropzone } from './Dropzone';
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Typography } from '@mui/material';
import { IMAGE_MIME_TYPE, PDF_MIME_TYPE } from './mime-types';

const meta: Meta<typeof Dropzone> = {
  title: 'Base/Dropzone',
  component: Dropzone,
  argTypes: {
    onDrop: { action: 'dropped' },
    onDropAny: { action: 'dropped any' },
    onReject: { action: 'rejected' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    multiple: { control: 'boolean' },
    maxSize: { control: 'number' },
    maxFiles: { control: 'number' },
    activateOnClick: { control: 'boolean' },
    activateOnDrag: { control: 'boolean' },
    activateOnKeyboard: { control: 'boolean' },
  },
  args: {
    disabled: false,
    loading: false,
    multiple: true,
    maxSize: Infinity,
    activateOnClick: true,
    activateOnDrag: true,
    activateOnKeyboard: true,
  },
};

export default meta;
type Story = StoryObj<typeof Dropzone>;

const DropzoneContent = () => (
  <Box sx={{ textAlign: 'center' }}>
    <Dropzone.Idle>
      <Typography>Drag and drop files here or click to select files</Typography>
    </Dropzone.Idle>
    <Dropzone.Accept>
      <Typography color='success.main'>Drop the files here</Typography>
    </Dropzone.Accept>
    <Dropzone.Reject>
      <Typography color='error.main'>File type not accepted, sorry!</Typography>
    </Dropzone.Reject>
  </Box>
);

export const Basic: Story = {
  render: args => (
    <SpecterTheme>
      <Dropzone {...args}>
        <DropzoneContent />
      </Dropzone>
    </SpecterTheme>
  ),
};

export const ImagesOnly: Story = {
  args: {
    accept: IMAGE_MIME_TYPE,
  },
  render: args => (
    <SpecterTheme>
      <Dropzone {...args}>
        <DropzoneContent />
      </Dropzone>
    </SpecterTheme>
  ),
};

export const PDFOnly: Story = {
  args: {
    accept: PDF_MIME_TYPE,
    multiple: false,
  },
  render: args => (
    <SpecterTheme>
      <Dropzone {...args}>
        <DropzoneContent />
      </Dropzone>
    </SpecterTheme>
  ),
};

export const Loading: Story = {
  args: {
    loading: true,
  },
  render: args => (
    <SpecterTheme>
      <Dropzone {...args}>
        <DropzoneContent />
      </Dropzone>
    </SpecterTheme>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: args => (
    <SpecterTheme>
      <Dropzone {...args}>
        <DropzoneContent />
      </Dropzone>
    </SpecterTheme>
  ),
};
