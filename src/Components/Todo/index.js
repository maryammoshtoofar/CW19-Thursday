import { FiEdit2 } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import { useTodos } from "../../Context";

const Todo = ({ todo }) => {
  const { deleteTodo, findItem } = useTodos();
  return (
    <div>
      <p>{todo.task}</p>
      <button onClick={() => deleteTodo(todo.id)}>
        <FaTrashAlt />
      </button>
      <button onClick={() => findItem(todo.id)}>
        <FiEdit2 />
      </button>
    </div>
  );
};

export default Todo;
