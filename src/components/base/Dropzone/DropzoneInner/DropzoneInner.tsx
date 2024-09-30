import { forwardRef } from 'react';
import StyledDropzoneInner from './DropzoneInner.style';

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
    <StyledDropzoneInner
      data-enable-pointer-events={enablePointerEvents || undefined}
      ref={ref}
      onDragOver={handleDragEvents}
      onDragEnter={handleDragEvents}
      onDragLeave={handleDragEvents}
    >
      {children}
    </StyledDropzoneInner>
  );
});

DropzoneInner.displayName = 'DropzoneInner';

export default DropzoneInner;
