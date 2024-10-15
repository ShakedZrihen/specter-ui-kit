import { styled, Typography } from '@mui/material';
import { colorPalette } from '../../../context/theme/lightMode';

interface StyledToggleButtonProps {
  isActive: boolean;
}

export const StyledToggleButton = styled('button')<StyledToggleButtonProps>`
  width: 38px;
  height: 22px;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  border: none;
  padding: 0;
  overflow: hidden;
  transition:
    background 0.3s ease,
    transform 0.3s ease;
  .toggle-indicator {
    position: absolute;
    top: 50%;
    left: ${props => (props.isActive ? 'calc(100% - 21px)' : '1px')};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    transition: left 0.3s ease;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  }
  .indocator-icon {
    margin-top: 7px;
    margin-left: 6px;
  }
  &.active {
    background: ${colorPalette.colors.toggledOnGreen};
  }
  &.inactive {
    background: ${colorPalette.colors.toggledOffGray};
  }
`;

export const ToggleTextualIndicator = styled(Typography)`
  margin-right: 8px;
  margin-left: 8px;
`;
