import { IconProps } from '../IconProps';
import { StyledIcon } from '../StyledIcon';

export function UserProfileIcon(props: IconProps) {
  const { size = 30, color = 'white', className } = props;

  return (
    <StyledIcon color={color} data-testid='specter-user-profile-icon'>
      <svg
        width={size}
        height={size}
        viewBox='0 0 30 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <path
          d='M15.1499 15.9746C15.0624 15.9621 14.9499 15.9621 14.8499 15.9746C12.6499 15.8996 10.8999 14.0996 10.8999 11.8871C10.8999 9.62461 12.7249 7.78711 14.9999 7.78711C17.2624 7.78711 19.0999 9.62461 19.0999 11.8871C19.0874 14.0996 17.3499 15.8996 15.1499 15.9746Z'
          stroke='white'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M23.4249 24.2242C21.1999 26.2617 18.2499 27.4992 15 27.4992C11.75 27.4992 8.79995 26.2617 6.57495 24.2242C6.69995 23.0492 7.44995 21.8992 8.78745 20.9992C12.2125 18.7242 17.8124 18.7242 21.2124 20.9992C22.5499 21.8992 23.2999 23.0492 23.4249 24.2242Z'
          stroke='white'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z'
          stroke='white'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </StyledIcon>
  );
}
