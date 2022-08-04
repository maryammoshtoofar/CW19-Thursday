import { createContext, useState, useContext, useEffect } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [state, setState] = useState({
    todos: initialState,
    editItem: null,
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
  const findItem = (id) => {
    const selectedTodo = state.todos.find((todo) => todo.id === id);
    setState((prev) => ({
      ...prev,
      editItem: selectedTodo,
    }));
  };

  const editTodo = (task, id) => {
    const newTodos = state.todos;
    const editedTodos = newTodos.map((todo) =>
      todo.id === id ? { task, id } : todo
    );
    console.log("newTodos", editedTodos);
    setState((prev) => ({
      ...prev,
      todos: editedTodos,
      editItem: null,
    }));
  };

  return (
    <TodoContext.Provider
      value={{ ...state, addTodo, deleteTodo, findItem, editTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export const useTodos = () => useContext(TodoContext);
export default TodoProvider;
