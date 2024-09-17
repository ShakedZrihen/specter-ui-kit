import { Modal, styled } from '@mui/material';
import { CloseIcon } from '../../icons';

export const StyledSinglePostView = styled(Modal)``;

export const SinglePostViewContainer = styled('div')`
  display: flex;
  direction: rtl;
  height: 70vh;
  width: 80vw;
  margin: 10vh auto;
  background-color: ${({ theme }) => theme.colorPalette.common.white};
  padding: 1.3rem;
  border-radius: 0.5rem;

  :focus {
    outline: none;
  }
`;

export const SinglePostContentContainer = styled('div')`
  width: 60%;
  background-color: green;
`;

export const SinglePostLeftSideContainer = styled('div')`
  width: 40%;
  display: flex;
  flex-direction: column;
`;

export const SinglePostMetadataContainer = styled('div')`
  background-color: yellow;
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
