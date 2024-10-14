import { IconProps } from '../IconProps';
import { StyledIcon } from '../StyledIcon';

export function SimiliarPostsIcon(props: IconProps) {
  const { size = 30, color = 'white', className } = props;

  return (
    <StyledIcon color={color} data-testid='specter-similiar-posts-icon-icon'>
      <svg
        width={size}
        height={size}
        viewBox='0 0 14 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <rect
          x='3.89538'
          y='0.928432'
          width='9.17698'
          height='9.17698'
          rx='1.07143'
          fill='#D9D9D9'
          stroke={color}
          stroke-width='0.714286'
        />
        <rect
          x='0.928737'
          y='3.89425'
          width='9.17698'
          height='9.17698'
          rx='1.07143'
          fill='#D9D9D9'
          fill-opacity='0.6'
          stroke={color}
          stroke-width='0.714286'
        />
      </svg>
    </StyledIcon>
  );
}
