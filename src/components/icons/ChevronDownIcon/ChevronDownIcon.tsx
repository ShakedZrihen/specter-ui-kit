import { IconProps } from '../IconProps';
import { StyledIcon } from '../StyledIcon';

export function ChevronDownIcon(props: IconProps) {
  const { size = 30, color = 'white', className } = props;

  return (
    <StyledIcon color={color} data-testid='specter-chevron-down-icon'>
      <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M8.14523 9.14102C8.34049 8.94576 8.65707 8.94576 8.85233 9.14102L12.5001 12.787L16.1467 9.14102C16.342 8.94576 16.6585 8.94576 16.8538 9.14102C17.0491 9.33628 17.0491 9.65287 16.8538 9.84813L12.5001 14.2012L8.14523 9.84813C7.94996 9.65287 7.94996 9.33628 8.14523 9.14102Z'
          fill={color}
        />
      </svg>
    </StyledIcon>
  );
}
