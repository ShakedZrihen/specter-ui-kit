import { IconProps } from '../IconProps';
import { StyledIcon } from '../StyledIcon';

export function TwitterXIcon(props: IconProps) {
  const { size = 30, color = 'white', className } = props;

  return (
    <StyledIcon color={color} data-testid='specter-twitter-x-icon'>
      <svg
        width={size}
        height={size}
        viewBox='0 0 12 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <g clipPath='url(#clip0_2035_3981)'>
          <mask
            id='mask0_2035_3981'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='12'
            height='12'
          >
            <path d='M0 0H12V12H0V0Z' fill='white' />
          </mask>
          <g mask='url(#mask0_2035_3981)'>
            <path
              d='M9.45 0.5625H11.2903L7.27029 5.16879L12 11.4379H8.29714L5.39486 7.6365L2.07771 11.4379H0.235714L4.53514 6.50936L0 0.563357H3.79714L6.41657 4.03736L9.45 0.5625ZM8.80286 10.3339H9.82286L3.24 1.60907H2.14629L8.80286 10.3339Z'
              fill={color}
            />
          </g>
        </g>
        <defs>
          <clipPath id='clip0_2035_3981'>
            <rect width='12' height='12' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </StyledIcon>
  );
}
