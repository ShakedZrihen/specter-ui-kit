import { Drawer, styled, Typography } from '@mui/material';
import { darken } from '@mui/system';

export const StyledFiltersMenu = styled('div')``;

export const FiltersHeader = styled('div')`
  display: flex;
  direction: rtl;
  align-items: center;
  padding: 1.2rem;
`;

export const Title = styled(Typography)`
  font-weight: 500;
  margin-right: 0.3rem;

  flex: 1;
`;

export const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 20rem;
  }
`;

export const FiltersMenuContainer = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const CloseMenuContainer = styled('div')`
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;

export const FiltersControllerButton = styled('div')`
  display: flex;
  direction: rtl;
  align-items: center;
  border-radius: 0 1.5rem 1.5rem 0;
  padding: 0.3rem 1.2rem;
  background-color: ${({ theme }) => theme.colorPalette.colors.spWhite};
  box-shadow: 0px 0px 5px 0px #0000001f;
  width: 7rem;

  :hover {
    cursor: pointer;
  }

  p {
    font-weight: 400;
    font-size: 1rem;
  }
`;

export const FiltersContainer = styled('div')`
  margin: 0 auto;
  padding: 1rem;
  width: 18rem;
  overflow-y: auto;
  flex: 1;
`;

export const FiltersActionContainer = styled('div')`
  display: flex;
  padding: 1.5rem;
  direction: rtl;
  justify-content: space-between;
  flex-direction: row-reverse;

  & a {
    text-decoration: none;
    font-family: 'Assistant';
    font-weight: 600;
    color: ${({ theme }) => theme.colorPalette.link.color};
    :hover {
      cursor: pointer;
      color: ${({ theme }) => darken(theme.colorPalette.link.color, 0.2)};
    }
  }
`;

export const StyledTypography = styled(Typography)`
  font-weight: 500;
`;

export const Circle = styled('div')`
  width: 1.3rem;  
  height: 1.3rem;
  background-color: ${({ theme }) => theme.colorPalette.common.icon};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colorPalette.common.white};
  line-height: 1.3rem;
  font-size: 0.75rem;
`;

