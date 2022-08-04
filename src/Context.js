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

  const deleteTodo = (id) => {
    setState((prev) => ({
      ...prev,
      todos: prev.todos.filter((todo) => todo.id !== id),
    }));
  };

  return (
    <TodoContext.Provider value={{ ...state, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
export const useTodos = () => useContext(TodoContext);
export default TodoProvider;
