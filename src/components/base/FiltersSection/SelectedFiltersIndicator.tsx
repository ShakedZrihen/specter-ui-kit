import { styled, Typography } from '@mui/material';
import { colorPalette } from '../../../context/theme/lightMode';

const SelectedFilters = styled('div')`
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colorPalette.common.icon};
`;

interface SelectedFiltersIndicatorProps {
  selectedFiltersNumber: number;
}

export const SelectedFiltersIndicator = ({
  selectedFiltersNumber,
}: SelectedFiltersIndicatorProps) => {
  if (selectedFiltersNumber === 0) {
    // no need to show indication in case there is no selected filters
    return null;
  }

  return (
    <SelectedFilters>
      <Typography sx={{ color: colorPalette.common.white }}>
        {selectedFiltersNumber}
      </Typography>
    </SelectedFilters>
  );
};
