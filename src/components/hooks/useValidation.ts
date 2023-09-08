import { useState } from 'react';

interface ValidationRegexes {
    [key: string]: RegExp;
  }

const useValidation = (initialState: boolean, regexes: ValidationRegexes) => {
  const [isValid, setIsValid] = useState<boolean>(initialState);

  const validate = (value: string, type: string) => {
    const isValid = regexes[type].test(value);
    setIsValid(isValid);
    return isValid;
  };

  return [isValid, validate] as const;
};

export default useValidation;
