import { IconProps } from '../IconProps';
import { StyledIcon } from '../StyledIcon';

export function CloseIcon(props: IconProps) {
  const { size = 30, color = 'white', className, style } = props;

  return (
    <StyledIcon color={color} data-testid='specter-close-icon' style={style}>
      <svg
        width={size}
        height={size}
        viewBox='0 0 30 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M19.8 9L15 13.8L10.2 9L9.15 10.05L13.95 15L9 19.95L10.05 21L15 16.05L19.95 21L21 19.95L16.05 15L20.85 10.05L19.8 9Z'
          fill={color}
        />
      </svg>
    </StyledIcon>
  );
}
