import { useState } from 'react';

// reactでformを管理するときに面倒な処理を簡単に
const useInput = (initailState: string) => {
  const [value, setValue] = useState(initailState);
  return {
    value: value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setValue(e.target.value),
  };
};

export default useInput;

// const name = "taro"
// const age = 23
// const createDataTime = new Date()

// const user = {
//     username:name,
//     age,
//     createDataTime
// }
