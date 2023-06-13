import React, { useEffect, useState } from "react";
import { getTodo, postTodo } from "../test";
import List from "./List";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodo();
      setTodos(data);
    };

    fetchData();
  }, []);

  const create = async () => {
    if (content.trim() !== "") {
      const newTodo = { title: content, completed: false };
      const created = await postTodo(newTodo);
      setTodos((prevTodos) => [...prevTodos, created]);
      setContent("");
    }
  };

  // const handleCheckboxChange = async (todoId, completed, title) => {
  //   console.log(todoId, completed, title);
  //   const modified = await postCheck(todoId, completed);
  //   setTodos((prevTodos) =>
  //     prevTodos.map((todo) =>
  //       todo.id === todoId ? { ...todo, completed: modified.completed } : todo
  //     )
  //   );
  // };

  return (
    <>
      <input
        name="todo"
        type="text"
        maxLength={15}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></input>

      <button onClick={create}>작성하기</button>

      <List todos={todos} setTodos={setTodos} />
    </>
  );
};

export default Todo;
