import { Typography } from '@mui/material';
import {
  SelectedFilters,
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary,
} from './FiltersSection.style';
import { ChevronDownIcon, ChevronLeftIcon } from '../../icons';
import { colorPalette } from '../../../context/theme/lightMode';
import { useState } from 'react';
import { CreationTimeFilter } from './Filters/CreationTimeFilter';

export interface FiltersSectionProps {
  filterName: string;
  selectedFilters?: string[];
}

/**
 * TODO: document component functionality
 *
 * [Figma](https://https://www.figma.com/file/...)
 *
 * ```tsx
 * <FiltersSection />
 * ```
 */
export function FiltersSection({
  filterName,
  selectedFilters = [],
}: FiltersSectionProps) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (isExpanded: boolean) => {
    setExpanded(isExpanded);
  };

  return (
    <StyledAccordion
      expanded={expanded}
      onChange={(e, isExpanded) => handleChange(isExpanded)}
    >
      <StyledAccordionSummary
        expandIcon={
          expanded ? (
            <ChevronDownIcon color={colorPalette.text.primary} />
          ) : (
            <ChevronLeftIcon color={colorPalette.text.primary} />
          )
        }
      >
        <Typography sx={{ marginRight: '0.5rem', fontWeight: 600, flex: 1 }}>
          {filterName}
        </Typography>
        {selectedFilters.length > 0 ? (
          <SelectedFilters>
            <Typography sx={{ color: colorPalette.common.white }}>
              {selectedFilters.length}
            </Typography>
          </SelectedFilters>
        ) : null}
      </StyledAccordionSummary>
      <StyledAccordionDetails>
        <CreationTimeFilter onChange={date => console.log({ date })} />
      </StyledAccordionDetails>
    </StyledAccordion>
  );
}
