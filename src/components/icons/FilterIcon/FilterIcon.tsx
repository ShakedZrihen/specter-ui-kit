import { IconProps } from '../IconProps';
import { StyledIcon } from '../StyledIcon';

export function FilterIcon(props: IconProps) {
  const { size = 30, color = 'white', className } = props;

  return (
    <StyledIcon color={color} data-testid='specter-filter-icon'>
      <svg
        width={size}
        height={size}
        viewBox='0 0 18 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <path
          d='M4.05005 1.57422H13.95C14.775 1.57422 15.45 2.24922 15.45 3.07422V4.72422C15.45 5.32422 15.075 6.07422 14.7 6.44922L11.475 9.29922C11.025 9.67422 10.725 10.4242 10.725 11.0242V14.2492C10.725 14.6992 10.425 15.2992 10.05 15.5242L9.00005 16.1992C8.02505 16.7992 6.67505 16.1242 6.67505 14.9242V10.9492C6.67505 10.4242 6.37505 9.74922 6.07505 9.37422L3.22505 6.37422C2.85005 5.99922 2.55005 5.32422 2.55005 4.87422V3.14922C2.55005 2.24922 3.22505 1.57422 4.05005 1.57422Z'
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
