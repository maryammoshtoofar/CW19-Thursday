import "./App.css";
import TodosForm from "./Components/TodosForm";
import TodosList from "./Components/TodosList";

function App() {
  return (
    <div className="App">
      Task Manager
      <TodosForm />
      <TodosList />
    </div>
  );
}

export default App;
