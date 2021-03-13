import Item from './Item';

const List = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <Item
            key={todo.id}
            id={todo.id}
            content={todo.content}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
};
export default List;

/*
[
  {
    content: '掃除をする',
    id: '1',
  },
  {
    content: '洗濯をする',
    id: '2',
  },
]
これを
[
  <li>{todos[0].content}<li>,
  <li>{todos[1].content}</li>
]
こうする
*/
