import Todo from "../Todo";
import { useTodos } from "../../Context";

const TodosList = () => {
  const { todos } = useTodos();
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodosList;
