import { Modal, styled } from '@mui/material';
import { CloseIcon } from '../../icons';
import { Post } from '../Post';

export const StyledSinglePostView = styled(Modal)``;

export const SinglePostViewContainer = styled('div')`
  display: flex;
  direction: rtl;
  height: 80vh;
  width: 90vw;
  margin: 6vh auto;
  background-color: ${({ theme }) => theme.colorPalette.colors.spWhite};
  padding: 1.3rem;
  border-radius: 0.5rem;

  :focus {
    outline: none;
  }
`;

export const SinglePostContentContainer = styled('div')`
  width: 60%;
`;

export const SinglePostLeftSideContainer = styled('div')`
  width: 40%;
  display: flex;
  flex-direction: column;
`;

export const SinglePostMetadataContainer = styled('div')`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const SinglePostViewActionsContainer = styled('div')`
  display: flex;
  direction: rtl;
  flex-direction: row-reverse;
`;

export const StyledCloseIcon = styled(CloseIcon)`
  :hover {
    cursor: pointer;
  }
`;

export const StyledSinglePost = styled(Post)`
  box-shadow: none;
  padding: 1rem;
`;

export const ExtraInfoContainer = styled('div')`
  max-height: 70vh;
  overflow-y: auto;
`;
