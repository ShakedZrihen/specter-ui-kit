 import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { ColletionModal } from './ColletionModal';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ColletionModal> = {
  title: 'components\base/ColletionModal',
  component: ColletionModal,
  argTypes: {},
  args: {
    isOpen: true,
    onClose: () => {
      // alert('closed');
    },
      
    collections : [
      {
        id: '1',
        name: 'Nablus48',
      },
      {
        id: '2',
        name: 'Nablus50',
      },
      {
        id: '3',
        name: 'Nablus70',
      },
      {
        id: '4',
        name: 'Nablus48',
      },
      {
        id: '5',
        name: 'Nablus50',
      },
      {
        id: '6',
        name: 'Nablus70',
      },
      {
        id: '7',
        name: 'Nablus48',
      },
      {
        id: '8',
        name: 'Nablus50',
      },
      {
        id: '9',
        name: 'Nablus70',
      },
      {
        id: '10',
        name: 'Nablus48',
      },
      {
        id: '11',
        name: 'Nablus50',
      },
      {
        id: '12',
        name: 'Nablus70',
      }
     
    ]
  },
};

export default meta;
type Story = StoryObj<typeof ColletionModal>;

export const Basic: Story = {
  render(props) {
    return (
      <SpecterTheme>
        <ColletionModal {...props} />
      </SpecterTheme>
    );
  },
};
