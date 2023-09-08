const formDate = (date: string): string => {
  const dateFormated = new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
  return dateFormated;
};

export default formDate;
