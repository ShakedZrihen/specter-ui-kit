import React, { ReactNode } from 'react';
import type { Preview } from '@storybook/react';
import { SpecterTheme } from '../src/context/theme/SpecterTheme'; 

type ProviderProps = {
  children?: ReactNode;
};

function Provider(props: ProviderProps) {
  const { children } = props;

  return <SpecterTheme>{children}</SpecterTheme>; 
}

const preview: Preview = {
  parameters: {
    decorators: [
      (Story) => (
        <Provider>
          <Story />
        </Provider>
      ),
    ],
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;