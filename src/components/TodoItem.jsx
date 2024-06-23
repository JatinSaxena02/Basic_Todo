import { useEffect } from "react";

export default function TodoItem({ todos, setTodos, todo }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleStatus(item) {
    setTodos(
      todos.map((todo) =>
        todo.name === item ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  
 

  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <div className="flex-row justify-center text-xl">
      {sortedTodos.map((todo) => (
        <div
          key={todo.name}
          className="justify-center mt-5 p-3"
          style={{
            width: "800px",
            padding: "30px",
            wordWrap: "break-word",
            borderRadius: "8px",
            boxShadow: "0px 2px 5px 2px #eee",
            fontFamily: "cursive",
          }}
        >
          <span
            className={todo.done ? "line-through" : ""}
            onClick={() => handleStatus(todo.name)}
          >
            {todo.name}
          </span>
          <span
            className="text-white bg-slate-500 rounded-sm  hover:bg-red-600 text-white float-right"
            style={{ margin: "-1px -10px" }}
          >
            <button
              onClick={() => handleDelete(todo)}
              style={{ marginTop: "-5px", padding: "7px 14px" }}
            >
              x
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}
