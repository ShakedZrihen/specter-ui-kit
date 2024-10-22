import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { CollectionModal } from './CollectionModal';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CollectionModal> = {
  title: 'custom/CollectionModal',
  component: CollectionModal,
  argTypes: {},
  args: {
    isOpen: true,
    onClose: () => {
      // alert('closed');
    },
    defaultSelectedCollections: ['1'],
    collections: [
      {
        id: '1',
        name: 'האוסף שלי',
        private: true,
        lastUpdate: new Date(),
      },
      {
        id: '2',
        name: 'האוסף המיוחד שלי',
        private: true,
        lastUpdate: new Date(),
      },
      {
        id: '3',
        name: 'האוסף המיוחד שלי',
        private: true,
        lastUpdate: new Date(),
      },
      {
        id: '4',
        name: 'האוסף המיוחד שלי',
        private: true,
        lastUpdate: new Date(),
      },
      {
        id: '5',
        name: 'האוסף המיוחד שלי',
        private: true,
        lastUpdate: new Date(),
      },
      {
        id: '6',
        name: 'האוסף המיוחד שלי',
        private: false,
        lastUpdate: new Date(),
      },
      {
        id: '7',
        name: 'האוסף המיוחד שלי',
        private: false,
        lastUpdate: new Date(),
      },
      {
        id: '8',
        name: 'האוסף המיוחד שלי',
        private: false,
        lastUpdate: new Date(),
      },
      {
        id: '9',
        name: 'האוסף המיוחד שלי',
        private: false,
        lastUpdate: new Date(),
      },
      {
        id: '10',
        name: 'האוסף המיוחד שלי',
        private: false,
        lastUpdate: new Date(),
      },
      {
        id: '11',
        name: 'האוסף המיוחד שלי',
        private: false,
        lastUpdate: new Date(),
      },
      {
        id: '12',
        name: 'האוסף המיוחד שלי',
        private: false,
        lastUpdate: new Date(),
      },
    ],
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
