import { IconProps } from '../IconProps';
import { StyledIcon } from '../StyledIcon';

export function ExpandIcon(props: IconProps) {
  const { size = 30, color = 'white', className } = props;

  return (
    <StyledIcon color={color} data-testid='specter-zoom-in-icon'>
      <svg
        width={size}
        height={size}
        viewBox='0 0 18 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <path
          d='M15.75 6.75V2.25H11.25'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M2.25 11.25V15.75H6.75'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M15.75 2.25L10.125 7.875'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M7.875 10.125L2.25 15.75'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </StyledIcon>
  );
}
