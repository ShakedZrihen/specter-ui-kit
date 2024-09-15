import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  styled,
} from '@mui/material';

export const StyledAccordion = styled(Accordion)`
  box-shadow: none;
`;

export const StyledAccordionSummary = styled(AccordionSummary)`
  direction: rtl;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  height: 3rem;
  min-height: 3rem;
  padding: 0.5rem;
  border-radius: 0.5rem;

  & .MuiAccordionSummary-expandIconWrapper {
    transform: none !important;
  }

  &.Mui-expanded {
    height: 3rem;
    min-height: 3rem;
    padding: 0.5rem;
    border-radius: 0.5rem 0.5rem 0 0;
    border-bottom: 1px solid ${({ theme }) => theme.colorPalette.divider.blue};
  }

  background-color: ${({ theme }) => theme.colorPalette.filterChip.background};
`;

export const SelectedFilters = styled('div')`
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colorPalette.common.icon};
`;

export const StyledAccordionDetails = styled(AccordionDetails)`
  background-color: ${({ theme }) => theme.colorPalette.filterChip.background};
  border-radius: 0 0 0.5rem 0.5rem;
`;
