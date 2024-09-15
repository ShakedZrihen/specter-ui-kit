import { IconProps } from '../IconProps';
import { StyledIcon } from '../StyledIcon';

export function CalendarIcon(props: IconProps) {
  const { size = 30, color = 'white', className } = props;

  return (
    <StyledIcon color={color} data-testid='specter-calendar-icon'>
      <svg
        width={size}
        height={size}
        viewBox='0 0 18 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <path
          d='M6.00024 1.5V3.75'
          stroke={color}
          stroke-width='1.25'
          stroke-miterlimit='10'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M11.9998 1.5V3.75'
          stroke={color}
          stroke-width='1.25'
          stroke-miterlimit='10'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M2.62524 6.81836H15.3752'
          stroke={color}
          stroke-width='1.25'
          stroke-miterlimit='10'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M15.75 6.375V12.75C15.75 15 14.625 16.5 12 16.5H6C3.375 16.5 2.25 15 2.25 12.75V6.375C2.25 4.125 3.375 2.625 6 2.625H12C14.625 2.625 15.75 4.125 15.75 6.375Z'
          stroke={color}
          stroke-width='1.25'
          stroke-miterlimit='10'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M11.771 10.2754H11.7778'
          stroke={color}
          stroke-width='1.66667'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M11.771 12.5254H11.7778'
          stroke={color}
          stroke-width='1.66667'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M8.99661 10.2754H9.00335'
          stroke={color}
          stroke-width='1.66667'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M8.99661 12.5254H9.00335'
          stroke={color}
          stroke-width='1.66667'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M6.22073 10.2754H6.22747'
          stroke={color}
          stroke-width='1.66667'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M6.22073 12.5254H6.22747'
          stroke={color}
          stroke-width='1.66667'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </StyledIcon>
  );
}
