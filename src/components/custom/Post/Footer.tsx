import { lighten, styled, Typography } from '@mui/material';
import { colorPalette } from '../../../context/theme/lightMode';
import { DocumetsIcon, FavoriteIcon, MoreIcon, ShareIcon } from '../../icons';
import { ActionButton, PostFooter, PostSlimFooter, ShareButton } from './Post.style';
import { Button } from '../../base/Button';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

interface FooterProps {
  onSave: (id: number | string) => void;
  onShare: (id: number | string) => void;
  onMore?: (id: number | string) => void;
  id: number | string;
}

interface SlimFooterProps {
  onSave: (id: number | string) => void;
  onShare: (id: number | string) => void;
  id: number | string;
}

export const Footer = ({ onSave, onShare, onMore, id }: FooterProps) => {
  const { t } = useTranslation();
  const [disableShare, setDisableShare] = useState<boolean>(true);
  //TODO: set disable to false later when product will approve...

  return (
    <PostFooter>
      <ActionButton onClick={() => onSave(id)}>
        <FavoriteIcon color={colorPalette.text.primary} size={20} />
        <Typography>{t("saveToCollection")}</Typography>
      </ActionButton>
      <ShareButton onClick={() => onShare(id)} disable={disableShare}>
        <ShareIcon color={disableShare ? lighten(colorPalette.text.primary, 0.6) : colorPalette.text.primary} size={20} />
        <Typography>{t("share")}</Typography>
      </ShareButton>
      {onMore && (
        <ActionButton onClick={() => onMore(id)}>
          <MoreIcon color={colorPalette.text.primary} size={20} />
          <Typography>{t("moreInfo")}</Typography>
        </ActionButton>
      )}
    </PostFooter>
  );
};

export const SlimFooter = ({ onSave, onShare, id }: SlimFooterProps) => {
  const { t } = useTranslation();

  const StyledButton = styled(Button)`
    height: 2rem;
    color: ${({ theme }) => theme.colorPalette.common.icon};
    border: 1px solid ${({ theme }) => theme.colorPalette.common.icon};
  `;

  return (
    <PostSlimFooter>
      <StyledButton
        onClick={() => onSave(id)}
        variant='outlined'
        startIcon={<DocumetsIcon color={colorPalette.common.icon} size={20} />}
      >
        {t("saveToCollection")}
      </StyledButton>
      <StyledButton
        onClick={() => onShare(id)}
        variant='outlined'
        startIcon={<ShareIcon color={colorPalette.common.icon} size={20} />}
      >
        {t("share")}
      </StyledButton>
    </PostSlimFooter>
  );
};
