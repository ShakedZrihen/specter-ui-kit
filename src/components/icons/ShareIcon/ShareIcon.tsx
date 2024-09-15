import { IconProps } from '../IconProps';
import { StyledIcon } from '../StyledIcon';

export function ShareIcon(props: IconProps) {
  const { size = 30, color = 'white', className } = props;

  return (
    <StyledIcon color={color} data-testid='specter-share-icon'>
      <svg
        width={size}
        height={size}
        viewBox='0 0 18 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <path
          d='M10.0344 6.34015L10.0344 3L13.9004 6.63265L17 9.54525L13.8453 12.0156L10.0344 15L10.0344 11.7316C3.34403 11.2578 1 14.8958 1 14.8958C1 12.6292 1.19876 10.2769 3.09517 8.49566C5.29957 6.4235 8.49202 6.27687 10.0344 6.34015Z'
          stroke={color}
          stroke-width='1.3'
        />
      </svg>
    </StyledIcon>
  );
}
