export interface SearchProps {
  onSearch?: (searchTerm: string, searchType: string) => void;
  onSeachFocus?: () => void;
  onSearchBlur?: () => void;
  withSearch?: boolean;
  searchSettingsStyleOverrides?: string;
}
