import { createContext, useContext } from 'react';

export interface DropzoneContextValue {
  idle: boolean;
  accept: boolean;
  reject: boolean;
}

const DropzoneContext = createContext<DropzoneContextValue | null>(null);

export const DropzoneProvider = DropzoneContext.Provider;

export const useDropzoneContext = () => {
  const context = useContext(DropzoneContext);

  if (!context) {
    throw new Error('Dropzone component was not found in tree');
  }

  return context;
};
