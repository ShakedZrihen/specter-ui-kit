import { Modal, styled } from '@mui/material';
import { DocumetsIcon } from '../../icons';
import { PersonalCollectionIcon } from '../../icons/PersonalCollectionIcon';
import { Typography} from '@mui/material';

export const StyledColletionModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center; 
  overflow: auto; 
  width: 100%;
  border-radius: 0.8rem ;
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
  align-items: center; 
  gap: 10px;
  position: absolute; 
  bottom: 1rem; 
  left: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e0e0e0; 
  background-color: ${({ theme }) => theme.colorPalette.colors.spWhite};
  width: calc(100% - 2rem);`;


export const ModalViewContainer = styled('div')`
  display: flex;
  flex-direction: column;
  height: 60vh; /* Increase height to make room for content */
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
  grid-template-columns: repeat(3, 1fr); /* Three items per row */
  gap: 15px;
  padding: 1rem;
  flex-grow: 1; /* This ensures the list takes the remaining space */
  max-height: 40vh; /* Limit the height to avoid overflow */
  overflow-y: auto; /* Enable vertical scrolling */
  overflow-x: hidden;
`;

export const CollectionItem = styled('div')<{ isSelected: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 48px;
  border: none; 
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.01s ease;
  padding: 10px; 
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colorPalette.colors.spBlue_20 : theme.colorPalette.colors.spWhite};

  &:active {
    background-color: ${({ theme }) => theme.colorPalette.colors.spGray_10};
  }


  .collection-icon {
    margin-right: 8px;
  }

  .collection-text {
    text-align: left;
    flex-grow: 1;
  }
`;

export const StyledTypography = styled(Typography)`
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  text-align: right;
  padding: 6px;
`;
