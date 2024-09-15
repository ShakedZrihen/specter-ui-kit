import { Card, styled, Typography } from '@mui/material';

export const StyledPost = styled(Card)`
  display: flex;
  flex-direction: column;
  direction: rtl;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.12);
`;

export const PostHeader = styled('div')`
  display: flex;
  direction: rtl;
  padding: 1rem;
`;

export const PostAvatar = styled('div')``;

export const PostHeaderContent = styled(Typography)`
  display: flex;
  flex-direction: column;
  direction: rtl;
`;

export const PostReadIndicator = styled('div')``;

export const PostContent = styled(Typography)`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  direction: rtl;
`;

export const PostFooter = styled('div')`
  height: 1rem;
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colorPalette.divider.color};
`;
