import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { editTodo, deleteTodo, toggleComplete } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  const handleEdit = () => {
    editTodo(todo.id, newTask);
    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        {/* Toggle Complete Button */}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="me-2"
        />
        {isEditing ? (
          <input
            type="text"
            className="form-control"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        ) : (
          <span
            className={
              todo.completed ? "text-decoration-line-through text-muted" : ""
            }
          >
            {todo.task}
          </span>
        )}
      </div>

      <div>
        {isEditing ? (
          <button className="btn btn-success btn-sm me-2" onClick={handleEdit}>
            Save
          </button>
        ) : (
          <button
            className="btn btn-warning btn-sm me-2"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
