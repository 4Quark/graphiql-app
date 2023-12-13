export const prettifyQuery = (query: string): string => {
  let indentLevel = 0;
  let formattedQuery = '';
  const lines = query.split('\n');

  for (const originalLine of lines) {
    const trimmedLine = originalLine.trim();

    if (trimmedLine === '') continue;

    if (trimmedLine.startsWith('}')) {
      indentLevel = Math.max(indentLevel - 1, 0);
    }

    let lineToAdd = '  '.repeat(indentLevel) + trimmedLine;

    if (trimmedLine.endsWith('{')) {
      indentLevel++;
    }

    const openingBraces = (trimmedLine.match(/{/g) || []).length;
    const closingBraces = (trimmedLine.match(/}/g) || []).length;
    if (openingBraces && closingBraces) {
      if (openingBraces > closingBraces) {
        indentLevel += openingBraces - closingBraces;
      } else if (closingBraces > openingBraces) {
        lineToAdd =
          '  '.repeat(Math.max(indentLevel - (closingBraces - openingBraces), 0)) + trimmedLine;
      }
    }

    formattedQuery += lineToAdd + '\n';
  }

  return formattedQuery.trim();
};
