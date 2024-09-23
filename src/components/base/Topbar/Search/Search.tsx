import SearchIcon from '@mui/icons-material/Search';
import {
  SearchIconWrapper,
  StyledInputBase,
  StyledSearch,
} from './Search.style';

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
  // TODO: add support of multiple search terms
  // add support for chips

  return (
    <StyledSearch>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        inputRef={searchInputRef}
        placeholder='חפש...'
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
