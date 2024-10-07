import { styled, Typography } from '@mui/material';
import { colorPalette } from '../../../context/theme/lightMode';
import { DocumetsIcon, FavoriteIcon, MoreIcon, ShareIcon } from '../../icons';
import { ActionButton, PostFooter, PostSlimFooter } from './Post.style';
import { Button } from '../../base/Button';

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
  return (
    <PostFooter>
      <ActionButton onClick={() => onSave(id)}>
        <FavoriteIcon color={colorPalette.text.primary} size={20} />
        <Typography>שמירה לאוספים</Typography>
      </ActionButton>
      <ActionButton onClick={() => onShare(id)}>
        <ShareIcon color={colorPalette.text.primary} size={20} />
        <Typography>שיתוף</Typography>
      </ActionButton>
      {onMore && (
        <ActionButton onClick={() => onMore(id)}>
          <MoreIcon color={colorPalette.text.primary} size={20} />
          <Typography>מידע נוסף</Typography>
        </ActionButton>
      )}
    </PostFooter>
  );
};

export const SlimFooter = ({ onSave, onShare, id }: SlimFooterProps) => {
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
        שמירה לאוספים
      </StyledButton>
      <StyledButton
        onClick={() => onShare(id)}
        variant='outlined'
        startIcon={<ShareIcon color={colorPalette.common.icon} size={20} />}
      >
        שיתוף
      </StyledButton>
    </PostSlimFooter>
  );
};
