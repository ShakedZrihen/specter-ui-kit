import { styled, alpha, InputBase } from '@mui/material';

export const StyledSearch = styled('div')`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 0.5rem 0.8rem;
  border-radius: 50px;
  background-color: ${({ theme }) =>
    alpha(theme.colorPalette.colors.spWhite, 0.15)};
  &:hover {
    background-color: ${({ theme }) =>
      alpha(theme.colorPalette.colors.spWhite, 0.25)};
  }
  margin-left: 0;
  width: 20rem;
  height: 1rem;
`;

export const SearchIconWrapper = styled('div')`
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledInputBase = styled(InputBase)`
  color: inherit;
  width: 100%;
`;
