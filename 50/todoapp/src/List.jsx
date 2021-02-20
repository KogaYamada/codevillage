import Item from './Item';

// Listコンポーネント
const List = ({ todos, deleteTodo }) => {
  console.log(todos);
  // 配列todosの要素の数だけliタグを生成
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <Item
            deleteTodo={deleteTodo}
            id={todo.id}
            content={todo.content}
            key={todo.id}
          />
        );
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
