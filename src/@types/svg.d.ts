declare module '*.svg' {
  import React from 'react';
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

/**
 * Raw images
 */
declare module '*.svg?skipsvgr' {
  const SVG: string;
  export default SVG;
}
