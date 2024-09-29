import React, { forwardRef } from 'react';
import {
  useDropzone,
  Accept,
  FileRejection,
  FileWithPath,
} from 'react-dropzone';
import { Box, styled, SxProps, Theme } from '@mui/material';
import { LoadingOverlay } from './LoadingOverlay';
import { DropzoneProvider } from './Dropzone.context';
import { DropzoneAccept, DropzoneIdle, DropzoneReject } from './DropzoneStatus';

const StyledDropzone = styled(Box)(({ theme }) => ({
  position: 'relative',
  border: '1px dashed',
  color: theme.palette.text.primary,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  cursor: 'pointer',
  userSelect: 'none',
  transition: theme.transitions.create(['background-color', 'border-color'], {
    duration: theme.transitions.duration.short,
  }),
  '&[data-accept]': {
    backgroundColor: theme.palette.success.light,
    borderColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
  },
  '&[data-reject]': {
    backgroundColor: theme.palette.error.light,
    borderColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
  '&[data-loading], &:not([data-activate-on-click])': {
    cursor: 'default',
  },
  '&[data-disabled]': {
    cursor: 'not-allowed',
  },
}));

const StyledInner = styled('div')({
  pointerEvents: 'none',
  userSelect: 'none',
  '&[data-enable-pointer-events]': {
    pointerEvents: 'all',
  },
});

export interface DropzoneProps {
  onDrop: (files: FileWithPath[]) => void;
  onDropAny?: (files: FileWithPath[], fileRejections: FileRejection[]) => void;
  onReject?: (fileRejections: FileRejection[]) => void;
  accept?: Accept | string[];
  disabled?: boolean;
  loading?: boolean;
  multiple?: boolean;
  maxSize?: number;
  maxFiles?: number;
  autoFocus?: boolean;
  activateOnClick?: boolean;
  activateOnDrag?: boolean;
  dragEventsBubbling?: boolean;
  activateOnKeyboard?: boolean;
  useFsAccessApi?: boolean;
  openRef?: React.ForwardedRef<() => void | undefined>;
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}

export const Dropzone = forwardRef<HTMLDivElement, DropzoneProps>(
  (
    {
      onDrop,
      onDropAny,
      onReject,
      accept,
      disabled = false,
      loading = false,
      multiple = true,
      maxSize = Infinity,
      maxFiles,
      autoFocus = false,
      activateOnClick = true,
      activateOnDrag = true,
      dragEventsBubbling = true,
      activateOnKeyboard = true,
      useFsAccessApi = true,
      openRef,
      children,
      sx,
      ...other
    },
    ref,
  ) => {
    const { getRootProps, getInputProps, isDragAccept, isDragReject, open } =
      useDropzone({
        onDrop: onDropAny,
        onDropAccepted: onDrop,
        onDropRejected: onReject,
        disabled: disabled || loading,
        accept: Array.isArray(accept)
          ? accept.reduce((r, key) => ({ ...r, [key]: [] }), {})
          : accept,
        multiple,
        maxSize,
        maxFiles,
        autoFocus,
        noClick: !activateOnClick,
        noDrag: !activateOnDrag,
        noDragEventsBubbling: !dragEventsBubbling,
        noKeyboard: !activateOnKeyboard,
        useFsAccessApi,
      });

    React.useImperativeHandle(openRef, () => open);

    const isIdle = !isDragAccept && !isDragReject;

    return (
      <DropzoneProvider
        value={{ accept: isDragAccept, reject: isDragReject, idle: isIdle }}
      >
        <StyledDropzone
          {...getRootProps()}
          ref={ref}
          sx={sx}
          data-accept={isDragAccept || undefined}
          data-reject={isDragReject || undefined}
          data-idle={isIdle || undefined}
          data-loading={loading || undefined}
          data-activate-on-click={activateOnClick || undefined}
          data-disabled={disabled || undefined}
          {...other}
        >
          <LoadingOverlay visible={loading} />
          <input {...getInputProps()} />
          <StyledInner
            data-enable-pointer-events={activateOnClick || undefined}
          >
            {children}
          </StyledInner>
        </StyledDropzone>
      </DropzoneProvider>
    );
  },
) as React.ForwardRefExoticComponent<
  DropzoneProps & React.RefAttributes<HTMLDivElement>
> & {
  Accept: typeof DropzoneAccept;
  Idle: typeof DropzoneIdle;
  Reject: typeof DropzoneReject;
};

Dropzone.displayName = 'Dropzone';

Dropzone.Accept = DropzoneAccept;
Dropzone.Idle = DropzoneIdle;
Dropzone.Reject = DropzoneReject;
