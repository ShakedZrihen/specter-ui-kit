import { Avatar, Card, styled, Typography, Link } from '@mui/material';
import { lighten } from '@mui/system';
import { LoopIcon } from '../../icons';

export const StyledPost = styled(Card)<{ isRawPost: boolean }>`
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
  flex-grow: 1;
`;

export const DetailesRow = styled('div')`
  display: flex;
  flex-direction: row;
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

export const PostReadIndicator = styled('div')`
  & .MuiFormControlLabel-root {
    margin-left: 0;
  }

  & .MuiFormControlLabel-label {
    margin-right: -0.3rem;
  }
`;

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

export const PostContent = styled(Typography)<{ direction: string }>`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  direction: ${({ direction }) => direction};
`;

export const PostFooter = styled('div')`
  display: flex;
  justify-content: space-around;
  height: 3rem;
  padding: 0 3rem;
  align-items: center;
`;

export const PostSlimFooter = styled('div')`
  display: flex;
  height: 3rem;
  align-items: center;
  gap: 1rem;
  padding-right: 0.8rem;
  margin-right: 2rem;
`;

export const ActionButton = styled('div')`
  display: flex;
  align-items: center;
  height: 1.875rem;
  color: ${({ theme }) => theme.colorPalette.text.primary};
  padding: 0.375rem 1.125rem;

  p {
    margin-right: 0.5rem;
  }

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colorPalette.colors.lightBlue};
    opacity: 0.85;
    border-radius: 2rem;
    justify-content: center;
  }
`;

export const ShareButton = styled('div')<{ disable: boolean }>`
  display: flex;
  align-items: center;
  height: 100%;
  p {
    margin-right: 0.5rem;
  }
  color: ${({ disable, theme }) =>
    disable
      ? lighten(theme.colorPalette.text.primary, 0.6)
      : theme.colorPalette.text.primary};

  :hover {
    cursor: ${({ disable }) => (disable ? '' : 'pointer')};
  }
`;

export const ChannelName = styled(Typography)<{ direction: string }>`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  direction: ${({ direction }) => direction};
  width: 5rem;
`;

export const SourceContent = styled('button')<{ direction: string }>`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colorPalette.colors.spBlue};
  display: inline-flex;
  cursor: pointer;
  padding: 0;
  outline: none;
  column-gap: 0.25rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: fit-content;
  direction: ltr;
  padding: 1rem;
`;

export const LinkSite = styled(Link)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 9rem;
  direction: ltr;
  text-align: center;
`;

export const Loop = styled(LoopIcon)`
  padding-top: 0.2rem;
  padding-left: 0.2rem;
`;
