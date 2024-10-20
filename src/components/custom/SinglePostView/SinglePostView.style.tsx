import { Modal, styled } from '@mui/material';
import { CloseIcon } from '../../icons';
import { Post } from '../Post';

export const StyledSinglePostView = styled(Modal)``;

export const SinglePostViewContainer = styled('div')`
  display: flex;
  direction: rtl;
  height: 67.5vh;
  width: 80vw;
  margin: 6vh auto;
  background-color: ${({ theme }) => theme.colorPalette.colors.spWhite};
  padding: 1rem;
  border-radius: 0.5rem;
  overflow: hidden;

  :focus {
    outline: none;
  }
`;

export const SinglePostContentContainer = styled('div')`
  flex: 1;
  width: 60%;
  height: auto;
  display: flex;
  flex-direction: row;
`;

export const SinglePostLeftSideContainer = styled('div')`
  flex: 1;
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

export const SinglePostLoadingIndiactorContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: 1000;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
