import { styled, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { SvgIcon } from '@mui/material';
import { StyledToggleButton } from './ToggleButton.style';

export interface ToggleButtonProps {
  active: boolean;
  onToggle: (isActive: boolean) => void;
  activeLabel?: string;
  inactiveLabel?: string;
}

export function ToggleButton({
  active,
  onToggle,
  activeLabel,
  inactiveLabel,
}: ToggleButtonProps) {
  const [isActive, setIsActive] = useState(active);

  const handleToggle = () => {
    const newIsActiveValue = !isActive;
    setIsActive(newIsActiveValue);
    onToggle(newIsActiveValue);
  };

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant='body1' style={{ marginRight: 8 }}>
        {isActive ? activeLabel || '' : inactiveLabel || ''}
      </Typography>
      <StyledToggleButton
        className={isActive ? 'active' : 'inactive'}
        isActive={isActive}
        onClick={handleToggle}
      >
        <div className='toggle-indicator'>
          {isActive ? (
            <SvgIcon
              className='indocator-icon'
              viewBox='0 0 24 24'
              sx={{ fontSize: 25, color: '#32A828' }}
            >
              <path d='M8.2 10L6.2 8L5 9.2L8.2 12.5L13.5 7.2L12.2 6L8.2 10Z' />
            </SvgIcon>
          ) : (
            <SvgIcon
              className='indocator-icon'
              viewBox='0 0 24 24'
              sx={{ fontSize: 25, color: '#878787' }}
            >
              <path d='M5 8H13V10H5V8Z' fill='#878787' />
            </SvgIcon>
          )}
        </div>
      </StyledToggleButton>
    </div>
  );
}
