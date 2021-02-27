const List = ({ todos }) => {
  console.log(todos);
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
