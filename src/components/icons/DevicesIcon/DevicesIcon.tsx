import { IconProps } from '../IconProps';
import { StyledIcon } from '../StyledIcon';

export function DevicesIcon(props: IconProps) {
  const { size = 30, color = 'white', className } = props;

  return (
    <StyledIcon color={color} data-testid='specter-devices-icon'>
      <svg
        width={size}
        height={size}
        viewBox='0 0 30 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <path
          d='M25 7.5V9.67499C24.6875 9.63749 24.325 9.67499 23.9375 9.67499C17.7261 9.67499 17.5 8.75 17.5 19.625H7.5C3.5 19.625 2.5 18.625 2.5 14.625V7.5C2.5 3.5 3.5 2.5 7.5 2.5H20C24 2.5 25 3.5 25 7.5Z'
          stroke={color}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M11.25 19.625V25'
          stroke={color}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M2.5 15H17.5005'
          stroke={color}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M7.4375 25H15'
          stroke={color}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M25.496 9.73827C25.2455 9.70077 24.9549 9.67578 24.6443 9.67578H20.3557C18.2114 9.67578 17.5 10.5633 17.5 13.2383V23.9383C17.5 26.6133 18.2114 27.5008 20.3557 27.5008H24.6443C26.7886 27.5008 27.5 26.6133 27.5 23.9383V13.2383C27.5 10.9508 26.979 9.97577 25.496 9.73827Z'
          stroke={color}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </StyledIcon>
  );
}
