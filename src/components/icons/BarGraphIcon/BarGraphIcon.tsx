import { IconProps } from '../IconProps';
import { StyledIcon } from '../StyledIcon';

export function BarGraphIcon(props: IconProps) {
  const { size = 30, color = 'white', className } = props;

  return (
    <StyledIcon color={color} data-testid='specter-bar-graph-icon'>
      <svg
        width={size}
        height={size}
        viewBox='0 0 30 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <path
          d='M2.5 27.5H27.5'
          stroke={color}
          strokeWidth='1.3'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M12.1875 5V27.5H17.8125V5C17.8125 3.625 17.25 2.5 15.5625 2.5H14.4375C12.75 2.5 12.1875 3.625 12.1875 5Z'
          stroke={color}
          strokeWidth='1.3'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M3.75 12.5V27.5H8.75V12.5C8.75 11.125 8.25 10 6.75 10H5.75C4.25 10 3.75 11.125 3.75 12.5Z'
          stroke={color}
          strokeWidth='1.3'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M21.25 18.75V27.5H26.25V18.75C26.25 17.375 25.75 16.25 24.25 16.25H23.25C21.75 16.25 21.25 17.375 21.25 18.75Z'
          stroke={color}
          strokeWidth='1.3'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </StyledIcon>
  );
}
