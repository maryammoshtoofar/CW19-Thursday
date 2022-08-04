import { useTodos } from "../../Context";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const TodosForm = () => {
  const [todoInput, setTodoInput] = useState("");

  const clearInput = (e) => {
    e.preventDefault();
    setTodoInput("");
  };

  const { addTodo } = useTodos();
  const createTodo = (e) => {
    console.log("e");
    e.preventDefault();
    const uniqueId = uuidv4();
    const newTodo = { id: uniqueId, task: todoInput };
    addTodo(newTodo);
    setTodoInput("");
  };
  return (
    <form>
      <input
        type="text"
        placeholder="Add Task"
        onChange={(e) => setTodoInput(e.target.value)}
        value={todoInput}
      />
      <div>
        <button onClick={createTodo}>Add Task</button>
        <button onClick={clearInput}>Clear </button>
      </div>
    </form>
  );
};

export default TodosForm;
