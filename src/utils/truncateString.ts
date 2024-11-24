export const truncateString = (
  str: string,
  maxLength = 40,
  addEllipsis = true
) =>
  str.length > maxLength
    ? str.slice(0, maxLength) + (addEllipsis ? '...' : '')
    : str;
