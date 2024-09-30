import React, { forwardRef } from 'react';
import {
  useDropzone,
  Accept,
  FileRejection,
  FileWithPath,
} from 'react-dropzone';
import { SxProps, Theme } from '@mui/material';
import { LoadingOverlay } from './LoadingOverlay';
import { DropzoneProvider } from './Dropzone.context';
import { DropzoneAccept, DropzoneIdle, DropzoneReject } from './DropzoneStatus';
import { assignRef } from './utils/assignRef';
import DropzoneInner from './DropzoneInner';
import StyledDropzone from './Dropzone.style';

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
  enablePointerEvents?: boolean;
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
      enablePointerEvents,
      ...others
    },
    ref,
  ) => {
    const {
      getRootProps,
      getInputProps,
      isDragAccept,
      isDragReject,
      isFocused,
      open,
    } = useDropzone({
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
      noDragEventsBubbling: dragEventsBubbling,
      noKeyboard: !activateOnKeyboard,
      useFsAccessApi,
    });

    assignRef(openRef, open);

    const isIdle = !isDragAccept && !isDragReject;

    return (
      <DropzoneProvider
        value={{ accept: isDragAccept, reject: isDragReject, idle: isIdle }}
      >
        <StyledDropzone
          {...getRootProps({ isDragReject, isDragAccept, isFocused })}
          {...others}
          ref={ref}
          sx={sx}
          data-accept={isDragAccept || undefined}
          data-reject={isDragReject || undefined}
          data-idle={isIdle || undefined}
          data-loading={loading || undefined}
          data-activate-on-click={activateOnClick || undefined}
          data-disabled={disabled || undefined}
        >
          {loading && <LoadingOverlay visible={loading} />}
          <input {...getInputProps()} />
          <DropzoneInner ref={ref} enablePointerEvents={enablePointerEvents}>
            {children}
          </DropzoneInner>
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
