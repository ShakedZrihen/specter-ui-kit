import { useMemo, useState } from 'react';
import { elipsis } from '../../../utils/elipsisContent';
import {
  HighlightedText,
  ShowMoreButton,
  StyledTextWithHighlights,
} from './TextWithHighlights.style';
import { useTranslation } from 'react-i18next';

export interface TextWithHighlightsProps {
  text: string;
  highlightedText: string[];
  direction: string;
  maxLines?: number;
}

/**
 * TODO: document component functionality
 *
 * [Figma](https://www.figma.com/file/...);
 *
 * ```tsx
 * <TextWithHighlights />
 * ```
 */
export function TextWithHighlights({
  highlightedText,
  text,
  direction,
  maxLines = 5,
}: TextWithHighlightsProps) {
  const { t } = useTranslation(); 

  const { elipsisContent, hasMore } = useMemo(
    () => elipsis(text, maxLines),
    [text, maxLines],
  );
  const [showMore, setShowMore] = useState(false);

  const highlightText = (content: string) => {
    // Create a regular expression to find the highlighted text, preserving word boundaries
    const regex = new RegExp(`(${highlightedText.join('|')})`, 'gi');

    // Split the content by the regex, and map through the parts
    const parts = content.split(regex);

    return parts.map((part, index) =>
      highlightedText.some(
        highlight => highlight.toLowerCase() === part.toLowerCase(),
      ) ? (
        <HighlightedText key={index} direction={direction}>
          {part}
        </HighlightedText>
      ) : (
        part
      ),
    );
  };

  return (
    <StyledTextWithHighlights direction={direction}>
      {highlightText(showMore ? text : elipsisContent)}
      {hasMore && !showMore && '...'}
      {hasMore && (
        <ShowMoreButton onClick={() => setShowMore(prevState => !prevState)}>
          {showMore ? t('showLess') : t('showMore')} 
        </ShowMoreButton>
      )}
    </StyledTextWithHighlights>
  );
}
