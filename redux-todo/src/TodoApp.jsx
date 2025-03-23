import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleComplete } from "./redux/todoSlice";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const handleAddTodo = () => {
    if (task.trim() !== "") {
      dispatch(addTodo(task));
      setTask(""); // Clear input field
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={{ span: 6, offset: 3 }} className="text-center">
          <h2 className="mb-4">Redux Toolkit Todo App</h2>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Enter a task..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <Button variant="primary" onClick={handleAddTodo} className="ms-2">
              Add
            </Button>
          </Form>

          <ListGroup className="mt-3">
            {todos.map((todo) => (
              <ListGroup.Item
                key={todo.id}
                className="d-flex justify-content-between align-items-center"
              >
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    cursor: "pointer",
                  }}
                  onClick={() => dispatch(toggleComplete(todo.id))}
                >
                  {todo.text}
                </span>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => dispatch(removeTodo(todo.id))}
                >
                  Delete
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default TodoApp;
