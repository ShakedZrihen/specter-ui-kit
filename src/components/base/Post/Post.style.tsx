import { Avatar, Card, styled, Typography } from '@mui/material';

export const StyledPost = styled(Card)`
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  direction: rtl;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.12);
`;

export const PostHeader = styled('div')`
  display: flex;
  direction: rtl;
  padding: 1rem;
  padding-bottom: 0;
`;

export const PostAvatar = styled(Avatar)`
  margin-left: 1rem;
  width: 3rem;
  height: 3rem;
`;

export const PostHeaderContent = styled(Typography)`
  display: flex;
  flex-direction: column;
  direction: rtl;
`;

export const PostDatetime = styled(Typography)`
  font-weight: 600;
  color: ${({ theme }) => theme.colorPalette.text.secondary};
`;

export const PostAuthor = styled(Typography)`
  font-weight: 600;
  color: ${({ theme }) => theme.colorPalette.text.primary};
`;

export const PostReadIndicator = styled('div')``;

export const PostSource = styled('div')`
  display: flex;
  color: ${({ theme }) => theme.colorPalette.text.secondary};

  a {
    text-decoration: none;
    margin: 0 0.5rem;
    color: ${({ theme }) => theme.colorPalette.link.color};
  }

  a:first-of-type {
    margin-right: 0;
  }

  span {
    margin: 0 0.5rem;
  }
`;

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
