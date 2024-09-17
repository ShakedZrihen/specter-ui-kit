import { Drawer, styled, Typography } from '@mui/material';

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
  background-color: ${({ theme }) => theme.colorPalette.common.white};
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
  margin: 1rem auto;
  width: 18rem;
`;
