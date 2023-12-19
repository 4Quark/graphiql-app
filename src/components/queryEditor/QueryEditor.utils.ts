export const prettifyQuery = (query: string): string => {
  let indentLevel = 0;
  let formattedQuery = '';
  let currentLine = '';
  let isInString = false;

  const addLine = () => {
    if (currentLine.trim() !== '') {
      formattedQuery += '  '.repeat(indentLevel) + currentLine.trim() + '\n';
    }
    currentLine = '';
  };

  for (const char of query) {
    if (char === '"' && currentLine.slice(-1) !== '\\') {
      isInString = !isInString;
    }

    if (char === '\n') {
      addLine();
      continue;
    }

    if (!isInString) {
      if (char === '{') {
        addLine();
        formattedQuery += '  '.repeat(indentLevel) + '{\n';
        indentLevel++;
        continue;
      } else if (char === '}') {
        addLine();
        indentLevel = Math.max(indentLevel - 1, 0);
        formattedQuery += '  '.repeat(indentLevel) + '}\n';
        continue;
      } else if (char === ',' || char === ';') {
        currentLine += char;
        addLine();
        continue;
      }
    }

    currentLine += char;
  }

  addLine();

  return formattedQuery.trim();
};
