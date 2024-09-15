import { IconProps } from '../IconProps';
import { StyledIcon } from '../StyledIcon';

export function LoopIcon(props: IconProps) {
  const { size = 30, color = 'white', className } = props;

  return (
    <StyledIcon color={color} data-testid='specter-loop-icon'>
      <svg
        width={size}
        height={size}
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <path
          d='M2.38672 3.44141H11.6134C12.7201 3.44141 13.6134 4.33474 13.6134 5.44141V7.65474'
          stroke={color}
          stroke-miterlimit='10'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M4.49339 1.33398L2.38672 3.44063L4.49339 5.54732'
          stroke={color}
          stroke-miterlimit='10'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M13.6134 12.561H4.38672C3.28005 12.561 2.38672 11.6677 2.38672 10.561V8.34766'
          stroke={color}
          stroke-miterlimit='10'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M11.5067 14.6665L13.6134 12.5598L11.5067 10.4531'
          stroke={color}
          stroke-miterlimit='10'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </StyledIcon>
  );
}
