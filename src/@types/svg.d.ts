declare module '*.svg' {
  import React from 'react';
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

/**
 * Raw images
 */
declare module '*.svg' {
  const content: unknown;
  export default content;
}