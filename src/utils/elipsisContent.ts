const WORDS_IN_LINE = 13;
const DEFAULT_ELIPSIS_LINES = 5;

export function elipsis(
  content: string,
  afterLines: number = DEFAULT_ELIPSIS_LINES,
) {
  const elipsisContent = content
    .split(' ')
    .slice(0, WORDS_IN_LINE * afterLines)
    .join(' ');

  const elipsis = content.length > elipsisContent.length;

  return { elipsisContent, hasMore: elipsis };
}
