const formDateNumeric = (date: string): string => {
  const dateFormated = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  }).format(new Date(date));
  return dateFormated;
};

export default formDateNumeric;
