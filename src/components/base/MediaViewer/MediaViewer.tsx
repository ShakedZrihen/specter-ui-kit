import { ReactImageGalleryProps } from 'react-image-gallery';
import { StyledMediaViewer } from './MediaViewer.style';

/**
 * TODO: document component functionality
 *
 * [Figma](https://https://www.figma.com/file/...)
 *
 * ```tsx
 * <MediaViewer />
 * ```
 */
export function MediaViewer(props: ReactImageGalleryProps) {
  return (
    <StyledMediaViewer
      {...props}
      showPlayButton={false}
      showThumbnails={false}
      showBullets
    />
  );
}
