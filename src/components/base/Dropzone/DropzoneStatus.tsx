import React from 'react';
import { useDropzoneContext } from './Dropzone.context';

interface DropzoneStatusProps {
  children: React.ReactNode;
}

const createDropzoneStatus = (
  status: keyof ReturnType<typeof useDropzoneContext>,
) => {
  const Component: React.FC<DropzoneStatusProps> = ({ children }) => {
    const ctx = useDropzoneContext();
    if (ctx[status]) {
      return <>{children}</>;
    }
    return null;
  };

  Component.displayName = `Dropzone${
    status.charAt(0).toUpperCase() + status.slice(1)
  }`;
  return Component;
};

export const DropzoneAccept = createDropzoneStatus('accept');
export const DropzoneReject = createDropzoneStatus('reject');
export const DropzoneIdle = createDropzoneStatus('idle');
