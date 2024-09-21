import { Divider, Typography } from '@mui/material';
import {
  ExtraInfoContainer,
  SinglePostContentContainer,
  SinglePostLeftSideContainer,
  SinglePostMetadataContainer,
  SinglePostViewActionsContainer,
  SinglePostViewContainer,
  StyledCloseIcon,
  StyledSinglePost,
  StyledSinglePostView,
} from './SinglePostView.style';
import { colorPalette } from '../../../context/theme/lightMode';
import { DescriptionAccordion } from '../DescriptionAccordion';
import { IPost } from '../../../@types/post';

export interface SinglePostViewProps {
  post: IPost & { isSlimView?: boolean; highlightedText?: string[] };
  isOpen: boolean;
  onClose?: () => void;
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
export function SinglePostView({ post, isOpen, onClose }: SinglePostViewProps) {
  const { enrichments } = post;

  return (
    <StyledSinglePostView open={isOpen}>
      <SinglePostViewContainer>
        <SinglePostContentContainer>
          <StyledSinglePost {...post} highlightedText={[]} slimView={true} />
        </SinglePostContentContainer>
        <Divider orientation='vertical' flexItem />
        <SinglePostLeftSideContainer>
          <SinglePostViewActionsContainer>
            <div onClick={onClose}>
              <StyledCloseIcon color={colorPalette.text.primary} />
            </div>
          </SinglePostViewActionsContainer>
          <SinglePostMetadataContainer>
            <Typography
              sx={{
                marginBottom: '0.5rem',
                color: colorPalette.text.secondary,
              }}
            >
              מידע נוסף על תמונה מתוך פוסט
            </Typography>
            <ExtraInfoContainer>
              <DescriptionAccordion
                descriptionName='מטא-דאטה'
                descriptionAttributes={enrichments?.metadata ?? {}}
              />
              <DescriptionAccordion
                descriptionName='ישויות מקושרות'
                descriptionAttributes={enrichments?.relatedEntities ?? {}}
              />
              <DescriptionAccordion
                descriptionName='העשרה מ-ai'
                descriptionAttributes={enrichments?.ai ?? {}}
              />
              <DescriptionAccordion
                descriptionName='הסטוריה תפעולית'
                descriptionAttributes={enrichments?.operationalHistory ?? {}}
              />
            </ExtraInfoContainer>
          </SinglePostMetadataContainer>
        </SinglePostLeftSideContainer>
      </SinglePostViewContainer>
    </StyledSinglePostView>
  );
}
