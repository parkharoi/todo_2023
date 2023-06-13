import axios from "axios";

export const getTodo = async () => {
  const res = await axios.get("http://localhost:3001/todos");
  return res.data;
};

export const postTodo = async (newtodo) => {
  const res = await axios.post(`http://localhost:3001/todos`, newtodo);
  return res.data;
};

export const patchTodo = async (id, save) => {
  const res = await axios.patch(`http://localhost:3001/todos/${id}`, save);
  return res.data;
};

export const deletTodo = async (id) => {
  const res = await axios.delete(`http://localhost:3001/todos/${id}`);
  return res.data;
};

// export const postCheck = async (todoId, completed) => {
//   const res = await axios.post(`http://localhost:3001/todos/${todoId}`, {
//     data: completed,
//   });
//   console.log("나와라", completed);
//   return res.data;
// };
