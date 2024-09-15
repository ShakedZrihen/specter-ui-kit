import { IconProps } from '../IconProps';
import { StyledIcon } from '../StyledIcon';

export function OrderByIcon(props: IconProps) {
  const { size = 30, color = 'white', className } = props;

  return (
    <StyledIcon color={color} data-testid='specter-order-by-icon'>
      <svg
        width={size}
        height={size}
        viewBox='0 0 18 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <path
          d='M2.25 5.24805H15.75'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
        />
        <path
          d='M4.5 9H13.5'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
        />
        <path
          d='M7.49963 12.752H10.4996'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
        />
      </svg>
    </StyledIcon>
  );
}
