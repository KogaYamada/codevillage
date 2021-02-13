// Listコンポーネント
const List = ({ todos }) => {
  console.log(todos);
  // 配列todosの要素の数だけliタグを生成
  return (
    <ul>
      {todos.map((todo) => {
        return <li key={todo.id}>{todo.content}</li>;
      })}
    </ul>
  );
};

export default List;

/*
[
  { content: '掃除をする', id: '1' },
  { content: '洗濯をする', id: '2' },
]
これを
[
  <li>{todos[0].content}</li>,
  <li>{todos[1].content}</li>
]
これに書き換えることができればOK
- ある配列をもとに新しい配列を生成するメソッド: mapメソッド
*/
