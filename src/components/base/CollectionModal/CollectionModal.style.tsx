import { Modal, styled } from '@mui/material';
import { DocumetsIcon } from '../../icons';
import { PersonalCollectionIcon } from '../../icons/PersonalCollectionIcon';



export const StyledColletionModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center; 
  overflow: auto; 
  width: 100%;
  border-radius: 12px;
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


export const PrivateCollectionIcon = styled(PersonalCollectionIcon)`
  font-size: 24px;
`;



export const ActionsContainer = styled('div')`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-top: auto;
  padding-top: 1rem;
`;

export const ModalViewContainer = styled('div')`
  display: flex;
  flex-direction: column;
  height: 40vh; 
  width: 750px; 
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

export const ExtraInfoContainer = styled('div')`
  display: grid;
  display: flex;
  gap: 15px; 
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
  width: 30%;
  border: none; 
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.01s ease;
  padding: 10px; 
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: ${({ isSelected }) => (isSelected ? '#e3f2fd' : '#fff')}; 
  
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
