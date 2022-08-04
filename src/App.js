import "./App.css";
import TodosForm from "./Components/TodosForm";
import TodosList from "./Components/TodosList";
import TodoProvider from "./Context";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        Task Manager
        <TodosForm />
        <TodosList />
      </div>
    </TodoProvider>
  );
}

export default App;
