import { IconProps } from '../IconProps';
import { StyledIcon } from '../StyledIcon';

export function BellIcon(props: IconProps) {
  const { size = 30, color = 'white', className } = props;

  return (
    <StyledIcon color={color} data-testid='specter-bell-icon'>
      <svg
        width={size}
        height={size}
        viewBox='0 0 30 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <path
          d='M15.025 3.63672C10.8875 3.63672 7.52499 6.99922 7.52499 11.1367V14.7492C7.52499 15.5117 7.19999 16.6742 6.81249 17.3242L5.37499 19.7117C4.48749 21.1867 5.09999 22.8242 6.72499 23.3742C12.1125 25.1742 17.925 25.1742 23.3125 23.3742C24.825 22.8742 25.4875 21.0867 24.6625 19.7117L23.225 17.3242C22.85 16.6742 22.525 15.5117 22.525 14.7492V11.1367C22.525 7.01172 19.15 3.63672 15.025 3.63672Z'
          stroke={color}
          stroke-width='1.2'
          stroke-miterlimit='10'
          stroke-linecap='round'
        />
        <path
          d='M17.3374 4.00078C16.9499 3.88828 16.5499 3.80078 16.1374 3.75078C14.9374 3.60078 13.7874 3.68828 12.7124 4.00078C13.0749 3.07578 13.9749 2.42578 15.0249 2.42578C16.0749 2.42578 16.9749 3.07578 17.3374 4.00078Z'
          stroke={color}
          stroke-width='1.2'
          stroke-miterlimit='10'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M18.7749 23.8242C18.7749 25.8867 17.0874 27.5742 15.0249 27.5742C13.9999 27.5742 13.0499 27.1492 12.3749 26.4742C11.6999 25.7992 11.2749 24.8492 11.2749 23.8242'
          stroke={color}
          stroke-width='1.2'
          stroke-miterlimit='10'
        />
      </svg>
    </StyledIcon>
  );
}
