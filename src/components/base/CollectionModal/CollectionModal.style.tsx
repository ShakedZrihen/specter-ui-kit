import { Modal, styled } from '@mui/material';
import { DocumetsIcon } from '../../icons';


export const StyledColletionModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center; 
  overflow: auto; 
`;

export const ModalViewContainer = styled('div')`
  display: flex;
  flex-direction: column;
  height: 65vh; 
  width: 70vw; 
  max-width: 680px; 
  margin: 6vh auto; 
  background-color: ${({ theme }) => theme.colorPalette.colors.spWhite};
  padding: 1.3rem;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative; 

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

export const CollectionIcon = styled(DocumetsIcon)`
  font-size: 24px;
    color: ${({ theme }) => theme.colorPalette.colors.spBlue};
`;


export const ActionsContainer = styled('div')`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-top: auto;
  padding-top: 1rem;
`;

export const ExtraInfoContainer = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 30px; 
  padding: 1rem;
  max-height: 60vh;
  overflow-y: auto;
  overflow-x: hidden; 
`;

export const CollectionItem = styled('div')<{ isSelected: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 48px;
  width: 100%;
  border: ${({ isSelected }) => (isSelected ? '1px solid #1976d2' : '#FFFFFF')};
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  padding: 10px; // Keep padding inside the item
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #fff; 

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
