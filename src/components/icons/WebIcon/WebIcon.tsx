import { IconProps } from '../IconProps';
import { StyledIcon } from '../StyledIcon';

export function WebIcon(props: IconProps) {
  const { size = 30, color = 'white', className } = props;

  return (
    <StyledIcon color={color} data-testid='specter-web-icon'>
      <svg
        width={size}
        height={size}
        viewBox='0 0 32 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <path
          d='M30.6548 18.38C31.2479 6.3938 24.0166 1 15.8274 1C7.63823 1 1 7.70779 1 15.9828C1 24.2578 5.15168 31.5649 18.1998 30.9655'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M17.3101 1.07617C17.3101 1.07617 21.7583 6.99437 21.7583 15.984M14.3446 30.8919C14.3446 30.8919 9.8964 24.9737 9.8964 15.984C9.8964 6.99437 14.3446 1.07617 14.3446 1.07617M1.93408 21.228H17.6067M1.93408 10.7401H29.7207'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M30.4753 24.8482C31.2078 25.3037 31.1618 26.4109 30.4086 26.4978L26.6024 26.9338L24.8957 30.3978C24.5577 31.0855 23.5123 30.7484 23.3389 29.8974L21.478 20.7339C21.3312 20.0147 21.9718 19.5623 22.5901 19.9473L30.4753 24.8482Z'
          stroke={color}
          stroke-width='1.5'
        />
      </svg>
    </StyledIcon>
  );
}
