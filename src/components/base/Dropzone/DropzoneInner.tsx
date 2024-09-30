import styled from '@emotion/styled';
import { forwardRef } from 'react';

const StyledInner = styled('div')({
  pointerEvents: 'none',
  userSelect: 'none',
});

const DropzoneInner = forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    enablePointerEvents?: boolean;
  }
>(({ children, enablePointerEvents }, ref) => {
  const handleDragEvents = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <StyledInner
      data-enable-pointer-events={enablePointerEvents || undefined}
      ref={ref}
      onDragOver={handleDragEvents}
      onDragEnter={handleDragEvents}
      onDragLeave={handleDragEvents}
    >
      {children}
    </StyledInner>
  );
});

DropzoneInner.displayName = 'DropzoneInner';

export default DropzoneInner;
