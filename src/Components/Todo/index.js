import { FiEdit2 } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
const Todo = ({ todo }) => {
  return (
    <div>
      <p>{todo.task}</p>
      <FaTrashAlt />
      <FiEdit2 />
    </div>
  );
};

export default Todo;
