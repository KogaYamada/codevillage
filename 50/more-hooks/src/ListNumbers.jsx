import { memo } from 'react';

const ListNumbers = ({ dataArray }) => {
  console.log('ListNumbers');
  return (
    <>
      {dataArray.map((number) => {
        return <h1 key={number}>{number}</h1>;
      })}
    </>
  );
};

export default memo(ListNumbers);
