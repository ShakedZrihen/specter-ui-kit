import SearchIcon from '@mui/icons-material/Search';
import {
  SearchIconWrapper,
  StyledInputBase,
  StyledSearch,
} from './Search.style';
import { useTranslation } from 'react-i18next';

interface SearchProps {
  onSearch: (searchTerm: string) => void;
  onFocus: () => void;
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  searchInputRef?: React.RefObject<HTMLDivElement>;
}

export const Search = ({
  searchTerm,
  searchInputRef,
  onSearch,
  onFocus,
  setSearchTerm,
}: SearchProps) => {
  const { t } = useTranslation();

  return (
    <StyledSearch>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        inputRef={searchInputRef}
        placeholder={t('search')}
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            onSearch(searchTerm);
          }
        }}
        onFocus={onFocus}
        inputProps={{ 'aria-label': 'search' }}
      />
    </StyledSearch>
  );
};
