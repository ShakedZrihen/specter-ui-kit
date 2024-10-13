import { Divider, Typography, CircularProgress } from '@mui/material';
import {
  ExtraInfoContainer,
  SinglePostContentContainer,
  SinglePostLeftSideContainer,
  SinglePostLoadingIndiactorContainer,
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
import { useTranslation } from 'react-i18next';

export interface SinglePostViewProps {
  post: IPost & { isSlimView?: boolean; highlightedText?: string[] };
  isOpen: boolean;
  onClose?: () => void;
  isLoading?: boolean;
}
export function SinglePostView({
  post,
  isOpen,
  onClose,
  isLoading,
}: SinglePostViewProps) {
  const { enrichments } = post;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <StyledSinglePostView open={isOpen}>
        <SinglePostViewContainer>
          <SinglePostLoadingIndiactorContainer>
            <CircularProgress />
          </SinglePostLoadingIndiactorContainer>
        </SinglePostViewContainer>
      </StyledSinglePostView>
    );
  }

  return (
    <StyledSinglePostView open={isOpen}>
      <SinglePostViewContainer>
        <SinglePostContentContainer>
          <StyledSinglePost {...post} slimView={true} />
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
              {t('additionalInfoAboutImage')}
            </Typography>
            <ExtraInfoContainer>
              <DescriptionAccordion
                descriptionName={t('metadata')}
                descriptionAttributes={enrichments?.metadata ?? {}}
              />
              <DescriptionAccordion
                descriptionName={t('relatedEntities')}
                descriptionAttributes={enrichments?.relatedEntities ?? {}}
              />
              <DescriptionAccordion
                descriptionName={t('aiEnrichments')}
                descriptionAttributes={enrichments?.ai ?? {}}
              />
              <DescriptionAccordion
                descriptionName={t('operationalHistory')}
                descriptionAttributes={enrichments?.operationalHistory ?? {}}
              />
            </ExtraInfoContainer>
          </SinglePostMetadataContainer>
        </SinglePostLeftSideContainer>
      </SinglePostViewContainer>
    </StyledSinglePostView>
  );
}
