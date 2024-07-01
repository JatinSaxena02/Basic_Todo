import { useState } from "react";

export default function Form({ todos, setTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });



  const formStyle = {
    justifyContent: "center",
    marginTop: "50px",
    padding: "20px",
    boxShadow: "0px 4px 5px  #eee",
    borderRadius: "12px",
    width: "800px",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <div className="flex justify-between mt-2 ">
        <div>
          <input
            type="text"
            required
            style={{ backgroundColor: "gray", fontFamily: "cursive" }}
            placeholder="Enter Todos to add in your list..."
            className="focus:outline-none w-full block mt-1 text-white text-xl"
            value={todo.name}
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
          />
        </div>
        <div className="text-white bg-slate-500 rounded-sm  hover:bg-red-600 text-white">
          <button type="submit" className="p-2.5">
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
