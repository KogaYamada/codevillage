import { useState, ChangeEvent } from 'react';

// カスタムフック
const useInput = (initailValue: string) => {
  const [value, setValue] = useState(initailValue);
  return {
    value: value,
    onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
  };
};

export default useInput;
