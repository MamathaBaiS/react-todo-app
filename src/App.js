import React, { useEffect, useState } from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [status, setStatus] = useState("all");

  // Initialize todos directly from localStorage
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [filteredTodos, setFilteredTodos] = useState([]);

  // Filter whenever todos or status change
  useEffect(() => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "incompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }, [todos, status]);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Toaster position="top-right" />
      <div className="App">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <div id="main-content" className="todo-box" tabIndex="-1">
          <header>
            <h1>MY TODO LIST</h1>
          </header>
          <Form
            inputText={inputText}
            todos={todos}
            setTodos={setTodos}
            setInputText={setInputText}
            setStatus={setStatus}
          />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
          />
        </div>
      </div>
    </>
  );
}

export default App;
