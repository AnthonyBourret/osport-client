const getDateToString = (date: Date): string => [
  new Date(date).getDate(),
  new Date(date).getMonth(),
  new Date(date).getFullYear(),
].toString();
export default getDateToString;
