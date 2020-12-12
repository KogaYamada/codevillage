import React, { FC } from 'react';
import useInput from './hooks/useInput';

// FC => Functional Component

// propsの型はここに書く
type Props = {
  addTodo: (text: string) => void;
};

const Form: FC<Props> = ({ addTodo }) => {
  // const [text, setText] = useState('');
  const text = useInput('');

  // 1. 送信したタイミングで入力している内容を削除する
  // 2. 何も入力されていないときにTodosに追加しない + alertで注意する:validatoin
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.value.length === 0) {
      alert('文字を入力してください');
      return;
    }
    addTodo(text.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        {...text}
        // value={text}
        // onChange={(e) => setText(e.target.value)}
      />
      <button>送信</button>
    </form>
  );
};

export default Form;
