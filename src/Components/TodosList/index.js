import Todo from "../Todo";
import { useTodos } from "../../Context";

const TodosList = () => {
  const { todos } = useTodos();
  console.log(todos);
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodosList;
