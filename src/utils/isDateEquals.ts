import getDateToString from './getdateToStrng';

const isDatesAreEquals = (date1: Date, date2: Date): boolean => getDateToString(date1) === getDateToString(date2);

export default isDatesAreEquals;
