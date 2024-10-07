import { SearchType } from "../SearchSettings";

export interface SearchProps {
  onSearch?: (searchTerm: string, searchType: string) => void;
  onSearchFocus?: () => void;
  onSearchBlur?: () => void;
  withSearch?: boolean;
  searchSettingsStyleOverrides?: string;
  defaultSearchTerm?: string;
  defaultSearchType?: SearchType;
}
