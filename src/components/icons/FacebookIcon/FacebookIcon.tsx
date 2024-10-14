import { IconProps } from '../IconProps';
import { StyledIcon } from '../StyledIcon';

export function FacebookIcon(props: IconProps) {
  const { size = 30, color = 'white', className } = props;

  return (
    <StyledIcon color={color} data-testid='specter-telegram-icon-icon'>
      <svg
        width={size}
        height={size}
        viewBox='0 0 12 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <g clip-path='url(#clip0_3040_92370)'>
          <path
            d='M12 6C12 2.68631 9.31369 0 6 0C2.68631 0 0 2.68631 0 6C0 8.99475 2.19412 11.477 5.0625 11.9271V7.73438H3.53906V6H5.0625V4.67813C5.0625 3.17438 5.95828 2.34375 7.32881 2.34375C7.98525 2.34375 8.67188 2.46094 8.67188 2.46094V3.9375H7.91531C7.16995 3.9375 6.9375 4.40002 6.9375 4.87453V6H8.60156L8.33555 7.73438H6.9375V11.9271C9.80587 11.477 12 8.9948 12 6Z'
            fill='#1877F2'
          />
          <path
            d='M8.33555 7.73438L8.60156 6H6.9375V4.87453C6.9375 4.39997 7.16995 3.9375 7.91531 3.9375H8.67188V2.46094C8.67188 2.46094 7.98525 2.34375 7.32877 2.34375C5.95828 2.34375 5.0625 3.17438 5.0625 4.67813V6H3.53906V7.73438H5.0625V11.9271C5.37263 11.9757 5.68608 12.0001 6 12C6.31392 12.0001 6.62737 11.9757 6.9375 11.9271V7.73438H8.33555Z'
            fill='white'
          />
        </g>
        <defs>
          <clipPath id='clip0_3040_92370'>
            <rect width='12' height='12' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </StyledIcon>
  );
}
