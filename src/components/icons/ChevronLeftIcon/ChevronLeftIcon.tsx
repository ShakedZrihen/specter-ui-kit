import { IconProps } from '../IconProps';
import { StyledIcon } from '../StyledIcon';

export function ChevronLeftIcon(props: IconProps) {
  const { size = 30, color = 'white', className } = props;

  return (
    <StyledIcon color={color} data-testid='specter-chevron-left-icon'>
      <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M14.8597 8.14449C15.055 8.33976 15.055 8.65634 14.8597 8.8516L11.2138 12.4994L14.8597 16.146C15.055 16.3412 15.055 16.6578 14.8597 16.8531C14.6644 17.0483 14.3479 17.0483 14.1526 16.8531L9.79956 12.4994L14.1526 8.14449C14.3479 7.94923 14.6644 7.94923 14.8597 8.14449Z'
          fill={color}
        />
      </svg>
    </StyledIcon>
  );
}
