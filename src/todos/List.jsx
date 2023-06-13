import React, { useState } from "react";
import { deletTodo, patchTodo } from "../test";

const List = ({ todos, setTodos }) => {
  const [modifyId, setModifyId] = useState(null);
  const [updateTitle, setUpdateTitle] = useState("");

  const handleModify = (id) => {
    setModifyId(id);
    setUpdateTitle("");
  };

  const handleSave = async (id) => {
    try {
      const updatedTodo = { title: updateTitle };
      await patchTodo(id, updatedTodo);
      setModifyId(null);
      setUpdateTitle("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deletTodo(id);
      const upDatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(upDatedTodos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            {modifyId === todo.id ? (
              <>
                {todo.id}
                &nbsp;
                <input
                  type="text"
                  name="todo"
                  defaultValue={todo.title}
                  onChange={(e) => setUpdateTitle(e.target.value)}
                />
                <button onClick={() => handleSave(todo.id)}>저장하기</button>
              </>
            ) : (
              <>
                {todo.id} &nbsp;
                {todo.title}
                <button onClick={() => handleModify(todo.id)}>수정하기</button>
              </>
            )}
            &nbsp;
            <button onClick={() => handleDelete(todo.id)}>삭제하기</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
