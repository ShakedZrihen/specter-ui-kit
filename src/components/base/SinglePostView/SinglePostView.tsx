import { Divider } from '@mui/material';
import {
  SinglePostContentContainer,
  SinglePostLeftSideContainer,
  SinglePostMetadataContainer,
  SinglePostViewActionsContainer,
  SinglePostViewContainer,
  StyledCloseIcon,
  StyledSinglePostView,
} from './SinglePostView.style';
import { colorPalette } from '../../../context/theme/lightMode';

export interface SinglePostViewProps {
  // TODO: Document component props
}

/**
 * TODO: document component functionality
 *
 * [Figma](https://https://www.figma.com/file/...)
 *
 * ```tsx
 * <SinglePostView />
 * ```
 */
export function SinglePostView(props: SinglePostViewProps) {
  return (
    <StyledSinglePostView open={true}>
      <SinglePostViewContainer>
        <SinglePostContentContainer></SinglePostContentContainer>
        <Divider orientation='vertical' flexItem />
        <SinglePostLeftSideContainer>
          <SinglePostViewActionsContainer>
            <StyledCloseIcon color={colorPalette.text.primary} />
          </SinglePostViewActionsContainer>
          <SinglePostMetadataContainer></SinglePostMetadataContainer>
        </SinglePostLeftSideContainer>
      </SinglePostViewContainer>
    </StyledSinglePostView>
  );
}
