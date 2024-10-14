import { Button, styled, Typography } from '@mui/material';
import { ActionsContainer } from './CollectionModal.style';
import { useTranslation } from 'react-i18next';

const StyledButtonText = styled(Typography)`
  padding: 0;
  font-weight: bold;
  font-size: 0.8rem;
`;

const StyledButtonContained = styled(Button)`
  background-color: ${({ theme }) => theme.colorPalette.icon.color};
  padding: 0.2rem 1rem;
  height: fit-content;
  border-radius: 1rem;
  box-shadow: none;
`;

const StyledButton = styled(Button)`
  padding: 0.2rem 1rem;
  height: fit-content;
  border-radius: 1rem;
  box-shadow: none;
  color: ${({ theme }) => theme.colorPalette.icon.color};
`;

interface ModalActionsProps {
  onClose?: () => void;
  handleConfirm: () => void;
}

export const ModalActions = ({ onClose, handleConfirm }: ModalActionsProps) => {
  const { t } = useTranslation();

  return (
    <ActionsContainer>
      <StyledButton variant='outlined' onClick={onClose}>
        <StyledButtonText>{t('Cancel')}</StyledButtonText>
      </StyledButton>
      <StyledButtonContained variant='contained' onClick={handleConfirm}>
        <StyledButtonText>{t('saveToCollectionPopup')}</StyledButtonText>
      </StyledButtonContained>
    </ActionsContainer>
  );
};
