import { IconProps } from '../IconProps';
import { StyledIcon } from '../StyledIcon';

export function PillIcon(props: IconProps) {
  const { size = 30, color = 'white', className } = props;

  return (
    <StyledIcon color={color} data-testid='specter-pill-icon'>
      <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <g clipPath='url(#clip0_2035_25090)'>
          <rect
            x='14.0407'
            y='0.0454324'
            width='9.7'
            height='22.5'
            rx='4.85'
            transform='rotate(35.2795 14.0407 0.0454324)'
            stroke={color}
            strokeWidth='1.5'
          />
          <path
            d='M7.57191 9.18801L15.4904 14.7904L11.7652 20.0558C10.2181 22.2425 7.19133 22.761 5.00468 21.2139C2.81804 19.6668 2.29955 16.6401 3.84661 14.4534L7.57191 9.18801Z'
            fill='black'
            fill-opacity='0.1'
            stroke={color}
            strokeWidth='1.5'
          />
        </g>
        <defs>
          <clipPath id='clip0_2035_25090'>
            <rect width='24' height='24' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </StyledIcon>
  );
}
