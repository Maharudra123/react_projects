import TodoProvider from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <TodoProvider>
      <div className="container mt-4">
        <h2 className="text-center">Todo App</h2>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
