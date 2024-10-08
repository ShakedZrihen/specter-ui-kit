import { IconProps } from '../IconProps';
import { StyledIcon } from '../StyledIcon';

export function PersonalCollectionIcon(props: IconProps) {
  const { size = 30, color = '#2860a8', className } = props;

  return (
    <StyledIcon
      data-testid='specter-personal-collection-icon-icon'
      className={className}
      style={{ width: size, height: size, color:'white' }}
    >
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 viewBox="0 0 614.000000 623.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,623.000000) scale(0.100000,-0.100000)"
 fill={color} stroke="none">
<path d="M3620 6180 c-588 -43 -1116 -284 -1525 -695 -352 -354 -586 -811
-660 -1290 -22 -142 -28 -155 -62 -155 -36 0 -174 -43 -298 -92 -291 -116
-565 -302 -731 -496 -294 -345 -373 -692 -272 -1202 23 -118 310 -1146 358
-1285 46 -132 142 -326 218 -440 76 -115 235 -280 331 -345 84 -56 197 -112
296 -146 79 -28 85 -28 358 -32 300 -4 339 0 523 54 217 63 503 192 674 304
406 268 630 617 630 983 l0 110 53 -6 c333 -40 713 2 1042 115 407 139 799
414 1072 753 226 280 400 645 479 1005 26 118 27 142 31 446 4 291 3 332 -16
440 -113 655 -483 1221 -1036 1587 -134 88 -349 197 -498 252 -285 104 -664
157 -967 135z m423 -814 c442 -133 732 -540 703 -990 -16 -250 -102 -441 -281
-622 -114 -115 -221 -186 -349 -233 -534 -193 -1105 97 -1273 646 -24 80 -26
103 -27 258 -1 188 9 244 69 386 103 246 327 456 575 539 120 41 187 49 345
46 127 -3 164 -7 238 -30z m-2615 -1905 c26 -202 105 -467 203 -670 27 -58 46
-108 42 -111 -5 -4 -132 -62 -283 -130 -151 -67 -288 -134 -303 -148 -88 -82
-96 -220 -19 -302 41 -42 103 -65 149 -54 15 3 176 72 357 152 l328 147 52
-60 c249 -292 538 -508 878 -655 61 -27 114 -52 118 -57 17 -17 40 -134 40
-205 0 -293 -242 -558 -694 -758 -254 -112 -430 -155 -641 -154 -135 0 -158 3
-230 27 -231 76 -401 263 -525 576 -35 88 -284 948 -350 1209 -50 198 -62 387
-34 515 18 81 76 212 124 282 133 194 378 364 680 471 99 35 94 38 108 -75z
m1635 -80 c136 -91 293 -158 468 -197 115 -27 385 -25 510 3 218 49 414 148
580 294 l65 57 98 -48 c284 -142 453 -324 472 -507 17 -161 -88 -368 -285
-563 -275 -272 -630 -437 -1036 -481 -477 -51 -1006 136 -1350 478 -256 254
-342 499 -245 697 67 135 236 281 440 381 l93 45 59 -55 c33 -31 92 -77 131
-104z"/>
<path d="M1772 1620 c-194 -82 -369 -159 -388 -170 -43 -27 -82 -93 -90 -151
-12 -84 30 -170 99 -205 65 -34 99 -25 492 141 328 137 374 160 406 194 94
104 73 266 -43 327 -64 33 -102 22 -476 -136z"/>
</g>
</svg>
    </StyledIcon>
  );
}