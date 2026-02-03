import React from "react";
import toast from "react-hot-toast";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    toast.success("Todo added");
    setInputText("");
  };
  const statusHandler = (e) => {
    const value = e.target.value;
    setStatus(value);

    if (value === "all") toast("Showing all todos");
    if (value === "completed") toast("Showing completed todos");
    if (value === "incompleted") toast("Showing incomplete todos");
  };
  return (
    <form>
      <label htmlFor="todo-input" className="sr-only">
        Add a new todo
      </label>
      <input
        id="todo-input"
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        autoComplete="off"
      />
      <button
        onClick={submitTodoHandler}
        className="todo-button"
        aria-label="add-btn"
        type="submit"
        disabled={!inputText.trim()}
      >
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <nav aria-label="Todo filters">
          <select
            onChange={statusHandler}
            name="todos"
            aria-label="filter-todo"
            className="filter-todo"
            autoComplete="off"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incompleted">Incompleted</option>
          </select>
        </nav>
      </div>
    </form>
  );
};

export default Form;
