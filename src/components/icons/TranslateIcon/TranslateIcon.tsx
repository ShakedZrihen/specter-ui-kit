import { IconProps } from '../IconProps';
import { StyledIcon } from '../StyledIcon';

export function TranslateIcon(props: IconProps) {
  const { size = 30, color = 'white', className } = props;

  return (
    <StyledIcon color={color} data-testid='specter-translate-icon'>
      <svg
        width={size}
        height={size}
        className={className}
        viewBox='0 0 30 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clip-path='url(#clip0_2035_23278)'>
          <path
            d='M26.613 27H24.219L19.788 20.301L17.709 27H15.588L17.898 19.776L18.486 18.306L16.554 15.198H18.822L20.607 18.054L22.371 20.7L22.896 18.873L23.967 15.198H26.109L23.673 22.632L26.613 27Z'
            fill={color}
          />
          <path
            d='M3 18L7.557 4.245H10.035L14.592 18H12.324L10.098 10.524C9.86 9.768 9.636 9.012 9.426 8.256C9.216 7.486 9.006 6.716 8.796 5.946H8.712C8.516 6.716 8.306 7.486 8.082 8.256C7.872 9.012 7.655 9.768 7.431 10.524L5.184 18H3ZM5.562 14.073V12.393H11.967V14.073H5.562Z'
            fill={color}
          />
        </g>
        <defs>
          <clipPath id='clip0_2035_23278'>
            <rect width='30' height='30' fill={color} />
          </clipPath>
        </defs>
      </svg>
    </StyledIcon>
  );
}
