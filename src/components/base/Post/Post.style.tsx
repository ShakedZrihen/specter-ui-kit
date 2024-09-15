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
  flex-grow: 1;
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

export const PostContent = styled(Typography)`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  direction: rtl;
`;

export const PostFooter = styled('div')`
  display: flex;
  justify-content: space-between;
  height: 3rem;
  padding: 0 3rem;
`;

export const ActionButton = styled('div')`
  display: flex;
  align-items: center;
  height: 100%;
  color: ${({ theme }) => theme.colorPalette.text.primary};
  p {
    margin-right: 0.5rem;
  }

  :hover {
    cursor: pointer;
    svg {
      fill: ${({ theme }) => theme.colorPalette.common.highlight};
    }
  }
`;
