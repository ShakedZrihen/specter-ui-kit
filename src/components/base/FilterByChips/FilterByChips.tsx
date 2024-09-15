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

/**
 * TODO: document component functionality
 *
 * [Figma](https://https://www.figma.com/file/...)
 *
 * ```tsx
 * <FilterByChips />
 * ```
 */
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
      <ClearFilters
        label='ניקוי פילטרים'
        variant='outlined'
        onClick={() => onClearFilters?.()}
      />
    </StyledFilterByChips>
  );
}
