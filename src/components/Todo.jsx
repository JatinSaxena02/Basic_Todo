import TodoItem from "./TodoItem";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;

  return (
    <>
      <div
        style={{
          border: "0px solid #eee",
          WebkitBoxShadow: "2px 3px 8px #eee",
          MozBoxShadow: "2px 3px 8px #eee",
          boxShadow: "2px 3px 8px #eee",
        }}
      >
        <Header />
      </div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <Form todos={todos} setTodos={setTodos} />
      </div>
      <div className="flex justify-center mb-20">
        {" "}
        <TodoItem todos={todos} setTodos={setTodos} />
        <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
      </div>
    </>
  );
}
