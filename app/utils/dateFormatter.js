import dateFormat from 'dateformat';

export function secondsToFormat(seconds, format) {
  const date = new Date(seconds * 1000);

  return dateFormat(date, format);
}
