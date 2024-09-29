import { Modal, styled } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';

export const StyledColletionModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* Ensures the close icon is positioned correctly */
`;

export const ModalViewContainer = styled('div')`
  display: flex;
  flex-direction: column;
  height: 65vh;
  width: 70vw;
  margin: 6vh auto;
  background-color: ${({ theme }) => theme.colorPalette.colors.spWhite};
  padding: 1.3rem;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative; /* Ensures the close icon stays within the modal */

  :focus {
    outline: none;
  }
`;

export const SingleContainerMetadataContainer = styled('div')`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const SearchContainer = styled('div')`
  margin-bottom: 1rem;
`;

export const ExtraInfoContainer = styled('div')`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 1rem;
  max-height: 60vh;
  overflow-y: auto;
`;

export const CollectionItem = styled('div')<{ isSelected: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 48px;
  width: 155px;
  border: ${({ isSelected }) => (isSelected ? '1px solid #1976d2' : '#FFFFFF')};
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  padding: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);


  &:hover {
    background-color: #e0e0e0;
  }

  &:active {
    background-color: #d0d0d0;
  }

  .collection-icon {
    margin-right: 8px;
  }

  .collection-text {
    text-align: left;
    flex-grow: 1;
  }
`;

export const CollectionIcon = styled(FolderIcon)`
  font-size: 24px;
`;


export const ActionsContainer = styled('div')`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-top: auto;
  padding-top: 1rem;
`;
