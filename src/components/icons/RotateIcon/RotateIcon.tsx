import { IconProps } from '../IconProps';
import { StyledIcon } from '../StyledIcon';

export function RotateIcon(props: IconProps) {
  const { size = 30, color = 'white', className } = props;

  return (
    <StyledIcon color={color} data-testid='specter-rotate-icon-icon'>
      <svg
        width={size}
        height={size}
        viewBox='0 0 18 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <path
          d='M12.5625 16.5H9.1875C6.375 16.5 5.25 15.375 5.25 12.5625V9.1875C5.25 6.375 6.375 5.25 9.1875 5.25H12.5625C15.375 5.25 16.5 6.375 16.5 9.1875V12.5625C16.5 15.375 15.375 16.5 12.5625 16.5Z'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M1.5 6.75C1.5 3.8475 4.2225 1.5 7.125 1.5M7.125 1.5L5.9625 2.8125M7.125 1.5L5.25 0.75'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </StyledIcon>
  );
}
