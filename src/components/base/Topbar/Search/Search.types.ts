export interface SearchProps {
  onSearch?: (searchTerm: string, searchType: string) => void;
  withSearch?: boolean;
  searchSettingsStyleOverrides?: string;
}
