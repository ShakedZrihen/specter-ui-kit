import {
  InputAdornment,
  OutlinedInput,
  styled,
  Typography,
} from '@mui/material';
import { SearchContainer } from './CollectionModal.style';
import { CloseIcon, SearchIcon } from '../../icons';
import { colorPalette } from '../../../context/theme/lightMode';

const StyledModalHeader = styled('div')`
  display: flex;
  direction: rtl;
  flex-direction: column;
  position: relative;
`;

const StyledTitle = styled(Typography)`
  font-size: 1.5rem;
  font-weight: bold;
`;

const StyledSearchBar = styled(OutlinedInput)`
  margin-top: 1rem;
  border-radius: 1rem;
  border-color: ${colorPalette.divider.color};
  & .MuiInputBase-input {
    padding: 0.2rem;
  }

  fieldset {
    border: 1px solid ${colorPalette.divider.color} !important;
  }
`;

const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  top: -0.5rem;
  left: 0;

  :hover {
    cursor: pointer;
  }
`;

interface ModalHeaderProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  onClose?: () => void;
}

export const ModalHeader = ({
  searchTerm,
  setSearchTerm,
  onClose,
}: ModalHeaderProps) => {
  return (
    <StyledModalHeader>
      <div onClick={onClose}>
        <StyledCloseIcon color={colorPalette.text.primary} onClick={onClose} />
      </div>
      <StyledTitle>שמירה לאוסף</StyledTitle>
      <SearchContainer>
        <StyledSearchBar
          fullWidth
          placeholder='חפש אוסף...'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          endAdornment={
            <InputAdornment position='end'>
              <SearchIcon color={colorPalette.text.secondary} size={20} />
            </InputAdornment>
          }
        />
      </SearchContainer>
    </StyledModalHeader>
  );
};
