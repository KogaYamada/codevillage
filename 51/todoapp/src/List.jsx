import Item from './Item';

const List = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <Item key={todo.id} content={todo.content} />;
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
