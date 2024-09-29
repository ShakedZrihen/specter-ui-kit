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
        name: 'האוסף המיוחד שלי',
      },
      {
        id: '2',
        name: 'האוסף המיוחד שלי',
      },
      {
        id: '3',
        name: 'האוסף המיוחד שלי',
      },
      {
        id: '4',
        name: 'האוסף המיוחד שלי',
      },
      {
        id: '5',
        name: 'האוסף המיוחד שלי',
      },
      {
        id: '6',
        name: 'האוסף המיוחד שלי',
      },
      {
        id: '7',
        name: 'האוסף המיוחד שלי',
      },
      {
        id: '8',
        name: 'האוסף המיוחד שלי',
      },
      {
        id: '9',
        name: 'האוסף המיוחד שלי',
      },
      {
        id: '10',
        name: 'האוסף המיוחד שלי',
      },
      {
        id: '11',
        name: 'האוסף המיוחד שלי',
      },
      {
        id: '12',
        name: 'האוסף המיוחד שלי',
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
