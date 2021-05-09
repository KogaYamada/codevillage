import { useState } from 'react';

const Presentational = ({ title, body }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{body}</p>
    </>
  );
};

const Container = () => {
  const [data, setData] = useState({ title: 'hello', body: 'body' });
  return (
    <>
      <Presentational title={data.title} body={data.body} />
    </>
  );
};
