import { FiEdit2 } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import { useTodos } from "../../Context";

const Todo = ({ todo }) => {
  const { deleteTodo } = useTodos();
  return (
    <div>
      <p>{todo.task}</p>
      <button onClick={() => deleteTodo(todo.id)}>
        <FaTrashAlt />
      </button>

      <FiEdit2 />
    </div>
  );
};

export default Todo;
