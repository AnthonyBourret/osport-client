const levelNumberToString = (level: number): string => {
  if (level === 0 || level === null) return 'No rating yet';
  if (level < 4) return 'Beginner';
  if (level >= 4 && level < 7) return 'Intermediate';
  if (level >= 7 && level < 10) return 'Advanced';
  if (level >= 10) return 'Expert';
  return 'Intermediate';
};

export default levelNumberToString;
