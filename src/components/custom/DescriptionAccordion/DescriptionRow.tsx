import { Typography } from '@mui/material';
import { StyledDescriptionRow } from './DescriptionAccordion.style';
import { colorPalette } from '../../../context/theme/lightMode';

interface DescriptionRowProps {
  descriptionKey: string;
  value: string;
}

export const DescriptionRow = ({
  descriptionKey,
  value,
}: DescriptionRowProps) => {
  return (
    <StyledDescriptionRow>
      <Typography
        sx={{ fontWeight: '400', color: colorPalette.text.secondary }}
      >
        {descriptionKey}
      </Typography>
      <Typography sx={{ fontWeight: '400' }}>{value}</Typography>
    </StyledDescriptionRow>
  );
};
