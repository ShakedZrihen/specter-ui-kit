import { alpha, Modal, styled } from '@mui/material';
import { Typography } from '@mui/material';
import { colorPalette } from '../../../context/theme/lightMode';

export const StyledColletionModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  width: 100%;
  border-radius: 0.8rem;
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

export const ActionsContainer = styled('div')`
  display: flex;
  justify-content: flex-start;
  padding: 0.6rem 0.5rem 0;
  gap: 0.5rem;
  margin-top: auto;
`;

export const ModalViewContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 45rem;
  min-height: 30rem;
  background-color: ${({ theme }) => theme.colorPalette.colors.spWhite};
  padding: 1.4rem;
  border-radius: 1rem;
  overflow: hidden;

  :focus {
    outline: none;
  }
`;

export const ExtraInfoContainer = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three items per row */
  gap: 15px;
  direction: rtl;
  padding: 1rem;
  flex-grow: 1;
  max-height: 15rem;
  overflow-y: auto;
  overflow-x: hidden;
  width: -webkit-fill-available;
`;

export const StyledCollectionItem = styled('div')<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  border-radius: 0.8rem;
  padding: 0.6rem 1rem;
  cursor: pointer;
  box-shadow: ${({ isSelected, theme }) =>
      isSelected ? `inset 0 0 0 1.5px ${theme.colorPalette.icon.color}, ` : ``}
    0px 0px 5px ${alpha(colorPalette.colors.spBlack, 0.12)};
  background-color: ${({ isSelected, theme }) =>
    isSelected
      ? theme.colorPalette.colors.lightBlue
      : theme.colorPalette.colors.spWhite};

  &:active {
    background-color: ${({ theme }) => theme.colorPalette.colors.spGray_10};
  }

  .collection-icon {
    margin-right: 0.6rem;
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
