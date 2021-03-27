import Item from './Item';

const List = ({ todos }) => {
  // 配列をもとに新しい配列を生成: mapメソッド
  console.log(todos);
  return (
    <ul>
      {todos.map((todo) => {
        return <Item key={todo.id} content={todo.content} />;
      })}
    </ul>
  );
};
// Item({content: "掃除をする", aa: "aaa"})

export default List;
