import { styled, Typography } from '@mui/material';

export const StyledSearchSettings = styled('div')<{ width?: string }>`
  height: 2.8rem;
  padding-right: 1rem;
  background-color: ${({ theme }) => theme.colorPalette.header.background};
  ${({ width }) => (width ? `width: ${width};` : '')};
  border-right: 1px solid ${({ theme }) => theme.colorPalette.colors.primary};
  display: flex;
  direction: rtl;
  align-items: center;
`;

export const StyledButton = styled(Typography)<{ selected: boolean }>`
  padding: 0.2rem 0.4rem;
  margin-right: 0.5rem;
  border-radius: 0.3rem;
  height: 1rem;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colorPalette.common.white};
  background-color: ${({ theme, selected }) =>
    selected
      ? theme.colorPalette.button.searchType.stroke
      : theme.colorPalette.header.background};
  border: 1px solid
    ${({ theme }) => theme.colorPalette.button.searchType.stroke};
  :hover {
    cursor: pointer;
  }
`;

export const AdditionalSearchSettingContainer = styled('div')`
  display: flex;
  align-items: center;

  & hr {
    height: 1rem;
    margin: 0 1.5rem;
    border: 0.95px solid ${({ theme }) => theme.colorPalette.common.white};
  }
`;

export const AdditionalSearchSettingTitle = styled(Typography)`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colorPalette.colors.spGray_10};
`;

export const SearchOperator = styled(Typography)`
  padding: 0.1rem 0.7rem;
  border-radius: 0.3rem;
  font-size: 0.8rem;
  font-weight: 600;
  direction: rtl;
  color: ${({ theme }) => theme.colorPalette.colors.secondary};
  background-color: ${({ theme }) => theme.colorPalette.colors.spGray_10};
`;

export const SearchOperatorContainer = styled('div')`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  direction: rtl;
  gap: 0.5rem;
  flex-direction: row-reverse;

  :hover {
    cursor: pointer;
  }
`;
