import { cloneElement } from 'react';
import { useDropzoneContext } from './Dropzone.context';
import { isElement } from './utils/isElement';
import { capitalize } from 'lodash';

export interface DropzoneStatusProps {
  children: React.ReactNode;
}

type DropzoneStatusComponent = React.FC<DropzoneStatusProps>;

function createDropzoneStatus(
  status: keyof ReturnType<typeof useDropzoneContext>,
) {
  const Component: DropzoneStatusComponent = props => {
    const { children, ...others } = props;
    const ctx = useDropzoneContext();
    const _children = isElement(children) ? children : <span>{children}</span>;

    if (ctx[status]) {
      return cloneElement(_children, {
        ...others,
        'data-dropzone-status': status,
      });
    }

    return null;
  };

  Component.displayName = `Dropzone${capitalize(status)}`;

  return Component;
}

export const DropzoneAccept = createDropzoneStatus('accept');
export const DropzoneReject = createDropzoneStatus('reject');
export const DropzoneIdle = createDropzoneStatus('idle');

export type DropzoneAcceptProps = DropzoneStatusProps;
export type DropzoneRejectProps = DropzoneStatusProps;
export type DropzoneIdleProps = DropzoneStatusProps;
