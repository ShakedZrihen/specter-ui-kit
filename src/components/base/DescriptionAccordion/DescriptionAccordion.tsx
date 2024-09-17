import { Typography } from '@mui/material';
import { colorPalette } from '../../../context/theme/lightMode';
import { ChevronDownIcon, ChevronLeftIcon } from '../../icons';
import {
  StyledAccordionDetails,
  StyledAccordionSummary,
  StyledDescriptionAccordion,
} from './DescriptionAccordion.style';
import { useState } from 'react';
import { DescriptionRow } from './DescriptionRow';

export interface DescriptionAccordionProps {
  descriptionName: string;
  descriptionAttributes: Record<string, string>;
}

/**
 * TODO: document component functionality
 *
 * [Figma](https://https://www.figma.com/file/...)
 *
 * ```tsx
 * <DescriptionAccordion />
 * ```
 */
export function DescriptionAccordion({
  descriptionName,
  descriptionAttributes,
}: DescriptionAccordionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <StyledDescriptionAccordion
      expanded={expanded}
      onChange={(_e, isExpanded) => setExpanded(isExpanded)}
    >
      <StyledAccordionSummary
        expandIcon={
          expanded ? (
            <ChevronDownIcon color={colorPalette.text.primary} />
          ) : (
            <ChevronLeftIcon color={colorPalette.text.primary} />
          )
        }
      >
        <Typography sx={{ marginRight: '0.5rem', fontWeight: 500, flex: 1, fontSize: '1.2rem' }}>
          {descriptionName}
        </Typography>
      </StyledAccordionSummary>
      <StyledAccordionDetails>
        {Object.entries(descriptionAttributes).map(([key, value]) => (
          <DescriptionRow descriptionKey={key} value={value} />
        ))}
      </StyledAccordionDetails>
    </StyledDescriptionAccordion>
  );
}
