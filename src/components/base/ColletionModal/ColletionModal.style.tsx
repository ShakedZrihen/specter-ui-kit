import { Modal, styled } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';

export const StyledColletionModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalViewContainer = styled('div')`
  display: flex;
  flex-direction: column;
  height: 60vh;
  width: 70vw;
  margin: 6vh auto;
  background-color: ${({ theme }) => theme.colorPalette.colors.spWhite};
  padding: 1.3rem;
  border-radius: 0.5rem;
  overflow: hidden;

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
  height: 30px;
  width: 110px;
  border: 2px solid ${({ isSelected }) => (isSelected ? '#1976d2' : '#ccc')};
  border-radius: 8px;
  background-color: ${({ isSelected }) => (isSelected ? '#e3f2fd' : '#f5f5f5')};
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  padding: 10px;

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
  color: ${({ theme }) => theme.colorPalette.colors.primary};
`;

export const ActionsContainer = styled('div')`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #ccc;
`;
