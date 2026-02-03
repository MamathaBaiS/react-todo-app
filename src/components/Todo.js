import React from "react";
import toast from "react-hot-toast";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    // remove todo
    setTodos((prevTodos) => prevTodos.filter((el) => el.id !== todo.id));

    toast(
      (t) => (
        <span>
          Todo deleted
          <button
            style={{
              marginLeft: "12px",
              background: "none",
              border: "none",
              color: "#2563eb",
              cursor: "pointer",
              fontWeight: 500,
            }}
            onClick={() => {
              setTodos((prevTodos) => [...prevTodos, todo]);
              toast.dismiss(t.id);
            }}
          >
            Undo
          </button>
        </span>
      ),
      { duration: 4000 },
    );
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    );
    toast.success(
      todo.completed ? "Marked as incomplete" : "Marked as completed",
    );
  };
  return (
    <li className={`todo ${todo.completed ? "completed" : ""}`}>
      <span className="todo-item">{todo.text}</span>
      <button
        onClick={completeHandler}
        className="complete-btn"
        aria-label="complete-btn"
        title="complete-btn"
      >
        <i className="fas fa-check"></i>
      </button>
      <button
        onClick={deleteHandler}
        className="trash-btn"
        aria-label="trash-btn"
        title="trash-btn"
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default Todo;
