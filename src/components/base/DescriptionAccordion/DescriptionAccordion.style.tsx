import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  styled,
} from '@mui/material';

export const StyledDescriptionAccordion = styled(Accordion)`
  box-shadow: none;
  width: 100%;
  margin-bottom: 1rem;

  &.Mui-expanded {
    margin: 0;
    margin-bottom: 1rem;
  }

  ::before {
    height: 0;
  }
`;

export const StyledAccordionDetails = styled(AccordionDetails)`
  border-color: ${({ theme }) => theme.colorPalette.divider.blue};
  direction: rtl;
  border-radius: 0 0 0.5rem 0.5rem;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  background-color: ${({ theme }) => theme.colorPalette.common.white};
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
  border: 1px solid ${({ theme }) => theme.colorPalette.divider.blue};
  transform: none !important;

  & .MuiAccordionSummary-expandIconWrapper {
    transform: none !important;
  }

  &.Mui-expanded {
    height: 3rem;
    min-height: 3rem;
    padding: 0.5rem;
    border-radius: 0.5rem 0.5rem 0 0;
    margin: 0;
  }

  background-color: ${({ theme }) => theme.colorPalette.header.fill};
`;

export const StyledDescriptionRow = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 1rem 0;
`;
