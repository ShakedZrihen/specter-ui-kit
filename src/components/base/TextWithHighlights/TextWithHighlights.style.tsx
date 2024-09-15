import { styled, Typography } from '@mui/material';

export const HighlightedText = styled('span')`
  background-color: ${({ theme }) => theme.colorPalette.common.highlight};
  padding: 0.1rem 0.5rem;
  border-radius: 6px;
`;

export const StyledTextWithHighlights = styled(Typography)`
  direction: rtl;
`;
