import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { CollectionModal } from './CollectionModal';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CollectionModal> = {
  title: 'components\base/ColletionModal',
  component: CollectionModal,
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
type Story = StoryObj<typeof CollectionModal>;

export const Basic: Story = {
  render(props) {
    return (
      <SpecterTheme>
        <CollectionModal {...props} />
      </SpecterTheme>
    );
  },
};