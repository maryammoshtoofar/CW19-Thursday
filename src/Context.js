import { createContext, useState, useContext } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [state, setState] = useState({
    todos: [],
    // todo: { id: "", task: "" },
  });


  const addTodo = (newTodo) => {
    setState((prev) => ({
      ...prev,
      todos: [...prev.todos, newTodo],
    }));
  };

  //   const clearInput = () => {};
  return (
    <TodoContext.Provider value={{ ...state, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
export const useTodos = () => useContext(TodoContext);
export default TodoProvider;
