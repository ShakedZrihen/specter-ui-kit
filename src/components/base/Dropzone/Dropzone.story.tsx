import { useRef, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Button,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Stack,
} from '@mui/material';
import { Dropzone } from './Dropzone';
import { MIME_TYPES } from './mime-types';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CloseIcon from '@mui/icons-material/Close';
import DropzoneContent from './utils/DropzoneContent';
import { SpecterTheme } from '../../../context/theme/SpecterTheme';

const meta: Meta<typeof Dropzone> = {
  title: 'Base/Dropzone',
  component: Dropzone,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dropzone>;

export const Basic: Story = {
  args: {
    onDrop: files => console.log('Dropped files:', files),
    children: <DropzoneContent />,
  },
  render: args => (
    <SpecterTheme>
      <Dropzone {...args} />
    </SpecterTheme>
  ),
};

export const CustomStyles: Story = {
  args: {
    onDrop: files => console.log('Dropped files:', files),
    children: <DropzoneContent />,
    sx: {
      border: '2px dotted',
      borderColor: theme => theme.colorPalette.colors.spBlue,
      backgroundColor: '#eee',
      borderRadius: '10px',
      '&[data-accept]': {
        backgroundColor: 'DarkSeaGreen',
        color: 'black',
      },
      '&[data-reject]': {
        backgroundColor: 'IndianRed',
        color: 'black',
      },
    },
  },
  render: args => (
    <SpecterTheme>
      <Dropzone {...args} />
    </SpecterTheme>
  ),
};

export const WithAcceptedFileTypes: Story = {
  args: {
    ...Basic.args,
    accept: [MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.pdf],
    children: (
      <div style={{ textAlign: 'center' }}>
        <Typography variant='h6'>Drop image or PDF files</Typography>
        <Typography variant='body2'>
          Only .png, .jpg, and .pdf files are accepted
        </Typography>
      </div>
    ),
  },
  render: args => (
    <SpecterTheme>
      <Dropzone {...args} />
    </SpecterTheme>
  ),
};

export const Loading: Story = {
  args: {
    ...Basic.args,
    loading: true,
  },
  render: args => (
    <SpecterTheme>
      <Dropzone {...args} />
    </SpecterTheme>
  ),
};

export const Disabled: Story = {
  args: {
    ...Basic.args,
    disabled: true,
  },
  render: args => (
    <SpecterTheme>
      <Dropzone {...args} />
    </SpecterTheme>
  ),
};

export const WithCustomButton: Story = {
  args: {
    onDrop: files => console.log('Dropped files:', files),
  },
  render: args => {
    const DropzoneWithCustomButton = () => {
      const openRef = useRef<() => void>(null);

      return (
        <Stack gap={2} alignItems='center'>
          <Button variant='contained' onClick={() => openRef.current?.()}>
            Select Files
          </Button>
          <Dropzone {...args} onDrop={args.onDrop} openRef={openRef}>
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <Typography variant='h6'>Drag and drop files here</Typography>
              <Typography variant='body2'>
                or click the button above to select files
              </Typography>
            </div>
          </Dropzone>
        </Stack>
      );
    };

    return (
      <SpecterTheme>
        <DropzoneWithCustomButton />
      </SpecterTheme>
    );
  },
};

export const WithCustomInternalButton: Story = {
  args: {
    onDrop: files => console.log('Dropped files:', files),
  },
  render: args => {
    const DropzoneWithCustomButton = () => {
      const openRef = useRef<() => void>(null);

      return (
        <Dropzone {...args} onDrop={args.onDrop} openRef={openRef}>
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <Button
              variant='contained'
              onClick={() => openRef.current?.()}
              sx={{ pointerEvents: 'all' }}
            >
              Select Files
            </Button>
            <Typography variant='h6'>Drag and drop files here</Typography>
            <Typography variant='body2'>
              or click the button above to select files
            </Typography>
          </div>
        </Dropzone>
      );
    };

    return (
      <SpecterTheme>
        <DropzoneWithCustomButton />
      </SpecterTheme>
    );
  },
};

export const WithStatusComponents: Story = {
  args: {
    ...Basic.args,
    accept: [MIME_TYPES.png, MIME_TYPES.jpeg],
  },
  render: args => {
    return (
      <SpecterTheme>
        <Dropzone {...args}>
          <Dropzone.Accept>
            <Typography>הקובץ מתקבל</Typography>
          </Dropzone.Accept>
          <Dropzone.Reject>
            <Typography>ניתן רק להוסיף תמונות</Typography>
          </Dropzone.Reject>
          <Dropzone.Idle>
            <Typography>לחץ כאן או גרור ושחרר כדי להוסיף תמונות</Typography>
          </Dropzone.Idle>
        </Dropzone>
      </SpecterTheme>
    );
  },
};

export const WithFileList: Story = {
  render: args => {
    const DropzoneWithFileList = () => {
      const [files, setFiles] = useState<File[]>([]);

      const handleDrop = (newFiles: File[]) => {
        setFiles(prevFiles => [...prevFiles, ...newFiles]);
      };

      const handleRemoveFile = (indexToRemove: number) => {
        setFiles(prevFiles =>
          prevFiles.filter((_, index) => index !== indexToRemove),
        );
      };

      return (
        <>
          <Dropzone onDrop={handleDrop}>
            <DropzoneContent />
          </Dropzone>
          {files.length > 0 && (
            <List>
              {files.map((file, index) => (
                <ListItem
                  key={index}
                  secondaryAction={
                    <IconButton
                      edge='end'
                      aria-label='delete'
                      onClick={() => handleRemoveFile(index)}
                    >
                      <CloseIcon />
                    </IconButton>
                  }
                >
                  <ListItemIcon>
                    <InsertDriveFileIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={file.name}
                    secondary={`${file.size} bytes`}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </>
      );
    };

    return (
      <SpecterTheme>
        <DropzoneWithFileList />
      </SpecterTheme>
    );
  },
};
