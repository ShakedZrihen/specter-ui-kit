import { IconProps } from '../IconProps';
import { StyledIcon } from '../StyledIcon';

export function UserIdIcon(props: IconProps) {
  const { size = 30, color = 'white', className } = props;

  return (
    <StyledIcon color={color} data-testid='specter-user-id-icon'>
      <svg
        width={size}
        height={size}
        viewBox='0 0 30 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <path
          d='M21.25 26.25H8.75C3.75 26.25 2.5 25 2.5 20V10C2.5 5 3.75 3.75 8.75 3.75H21.25C26.25 3.75 27.5 5 27.5 10V20C27.5 25 26.25 26.25 21.25 26.25Z'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M17.5 10H23.75'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M18.75 15H23.75'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M21.25 20H23.75'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M10.625 14.1129C11.8746 14.1129 12.8875 13.0999 12.8875 11.8504C12.8875 10.6008 11.8746 9.58789 10.625 9.58789C9.3755 9.58789 8.36255 10.6008 8.36255 11.8504C8.36255 13.0999 9.3755 14.1129 10.625 14.1129Z'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M15 20.4117C14.825 18.5992 13.3875 17.1742 11.575 17.0117C10.95 16.9492 10.3125 16.9492 9.675 17.0117C7.8625 17.1867 6.425 18.5992 6.25 20.4117'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </StyledIcon>
  );
}
