import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { DescriptionAccordion } from './DescriptionAccordion';
import type { Meta, StoryObj } from '@storybook/react';
import { useTranslation } from 'react-i18next';

const meta: Meta<typeof DescriptionAccordion> = {
  title: 'custom/DescriptionAccordion',
  component: DescriptionAccordion,
  argTypes: {},
  args: {
    descriptionName: 'metadata',
    descriptionAttributes: {
      'creationTime': '16:31, August 19, 2024',
      'harvestTime': '16:46, August 19, 2024',
      'lastUpdate': '16:51, August 19, 2024',
      'collectionSource': 'Telegram inhouse',
      'itemID': 'DFEG45',
      'additionalInfo': '-',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DescriptionAccordion>;

export const Basic: Story = {
  render(props) {
    const { t } = useTranslation();

    const translatedAttributes = {
      [t('creationTime')]: props.descriptionAttributes.creationTime,
      [t('harvestTime')]: props.descriptionAttributes.harvestTime,
      [t('lastUpdate')]: props.descriptionAttributes.lastUpdate,
      [t('collectionSource')]: props.descriptionAttributes.collectionSource,
      [t('itemID')]: props.descriptionAttributes.itemID,
      [t('additionalInfo')]: props.descriptionAttributes.additionalInfo,
    };

    return (
      <SpecterTheme>
        <DescriptionAccordion
          {...props}
          descriptionName={t(props.descriptionName)}
          descriptionAttributes={translatedAttributes}
        />
      </SpecterTheme>
    );
  },
};
