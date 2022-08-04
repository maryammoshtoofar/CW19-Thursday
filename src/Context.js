import { createContext, useState, useContext, useEffect } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [state, setState] = useState({
    todos: initialState,
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  const addTodo = (newTodo) => {
    setState((prev) => ({
      ...prev,
      todos: [...prev.todos, newTodo],
    }));
  };




  return (
    <TodoContext.Provider value={{ ...state, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
export const useTodos = () => useContext(TodoContext);
export default TodoProvider;
