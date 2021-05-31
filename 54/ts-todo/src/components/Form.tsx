import { FormEvent, VFC, useState } from 'react';

type Props = {
  onFormSubmit: (task: string) => void;
};

const Form: VFC<Props> = ({ onFormSubmit }) => {
  const [text, setText] = useState('');
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFormSubmit(text);
    setText('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='タスクを入力'
      />
      <button>タスク追加</button>
    </form>
  );
};

export default Form;
