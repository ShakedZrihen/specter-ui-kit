import { styled, Typography } from '@mui/material';

export const HighlightedText = styled('span')<{ direction: string }>`
  background-color: ${({ theme }) => theme.colorPalette.common.highlight};
  padding: 0.1rem 0.5rem;
  border-radius: 6px;
  direction: ${({ direction }) => direction};
`;

export const StyledTextWithHighlights = styled(Typography)<{
  direction: string;
}>`
  direction: ${({ direction }) => direction};
  color: ${({ theme }) => theme.colorPalette.text.primary};
  font-size: 1.2rem;
  font-weight: 400;
`;

export const ShowMoreButton = styled('span')`
  display: flex;
  direction: rtl;
  cursor: pointer;
  color: ${({ theme }) => theme.colorPalette.link.color};
  margin-right: 1rem;
`;
