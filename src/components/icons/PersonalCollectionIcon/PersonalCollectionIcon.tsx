import { IconProps } from '../IconProps';
import { StyledIcon } from '../StyledIcon';

export function PersonalCollectionIcon(props: IconProps) {
  const { size = 30, color = 'white', className, fill = '#1B1E2D' } = props;

  return (
    <StyledIcon
      data-testid='specter-personal-collection-icon-icon'
      color={color}
    >
      <svg
        width={size}
        height={size}
        className={className}
        viewBox='0 0 18 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M9.00073 13.0002C9.50073 14.5002 8.27514 15.7039 6.48718 16.318C4.50072 17.0002 3.11475 16.2999 2.4888 14.071L1.86025 11.8373C1.7333 11.3839 1.65389 10.972 1.63667 10.6058C1.55882 9.15844 2.7179 7.9971 4.50071 7.50021'
          stroke={color}
          stroke-width='1.2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M4.69922 13.8789L6.43097 13.15'
          stroke={color}
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M4 11.4346L5.97033 10.556'
          stroke={color}
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <circle cx='10.5' cy='7.5' r='5.5' fill={color} />
        <path
          d='M14.6143 9.66667C14.6143 10.2395 14.2075 10.9733 13.4415 11.584C12.689 12.184 11.6473 12.6143 10.5 12.6143C9.35271 12.6143 8.31101 12.184 7.55847 11.584C6.79247 10.9733 6.38571 10.2395 6.38571 9.66667C6.38571 9.12139 6.76104 8.55946 7.51466 8.11288C8.25983 7.67129 9.31441 7.38571 10.5 7.38571C11.6856 7.38571 12.7402 7.67129 13.4853 8.11288C14.239 8.55946 14.6143 9.12139 14.6143 9.66667Z'
          fill={fill}
          stroke={color}
          stroke-width='0.771429'
        />
        <circle
          cx='10.4994'
          cy='5.92815'
          r='2.82857'
          fill={fill}
          stroke={color}
          stroke-width='0.771429'
        />
      </svg>
    </StyledIcon>
  );
}
