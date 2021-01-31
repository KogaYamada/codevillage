const List = ({ todos }) => {
  // propsを渡さなかた場合undefinedが渡ってくる
  console.log(todos);

  return (
    <ul>
      {todos.map((todo) => {
        return <li key={todo.id}>{todo.content}</li>;
      })}
    </ul>
  );
};
// [<li>掃除をする</li>, <li>洗濯をする</li>, <li>料理をする</li>]

export default List;
