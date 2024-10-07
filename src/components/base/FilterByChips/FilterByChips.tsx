import { Typography } from '@mui/material';
import {
  ChipContainer,
  ClearFilters,
  FilterChip,
  StyledFilterByChips,
} from './FilterByChips.style';

export interface FilterByChipsProps {
  appliedFilters: string[];
  onClearFilters?: () => void;
  onDeleteFilter?: (filter: string) => void;
}

export function FilterByChips({
  onClearFilters,
  onDeleteFilter,
  appliedFilters = [],
}: FilterByChipsProps) {
  return (
    <StyledFilterByChips>
      <Typography>מפולטר לפי:</Typography>
      <ChipContainer>
        {appliedFilters.map((filter: string) => (
          <FilterChip
            label={filter}
            variant='outlined'
            onDelete={() => onDeleteFilter?.(filter)}
          />
        ))}
      </ChipContainer>
      {appliedFilters.length > 0 ? (
        <ClearFilters
          label='ניקוי פילטרים'
          variant='outlined'
          onClick={() => onClearFilters?.()}
        />
      ) : null}
    </StyledFilterByChips>
  );
}
