import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useContext, useState } from "react";
import TodoContext from "../contexts/TodoContext";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
const Todo = ({ todo: { id, description, completed, createdAt } }) => {
  const { todos, setTodos, deleteTodo, switchAddToUpdate } =
    useContext(TodoContext);
  let [isCompleted, setIsCompleted] = useState(completed);
// function that change todo status from completed to uncompleted or opposite
  function completedHandle(e) {
    setIsCompleted(e.target.checked);
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: e.target.checked ? new Date() : null,
        };
      } else return todo;
    });
    setTodos([...newTodos]);
  }

  return (
    <li
      className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
      style={{
        backgroundImage: completed
          ? "linear-gradient(to top, rgb(230 240 234) 0%, rgb(238 245 240) 100%)"
          : "linear-gradient(to top, rgb(240 240 240) 0%, rgb(242 247 247) 100%)",
      }}
    >
      <input
        checked={isCompleted}
        onChange={e => completedHandle(e)}
        className="form-check-input me-2"
        type="checkbox"
      />
      <span>{description}</span>
      <small className="text-muted todo-createAt">
        {completed
          ? `completed ${formatDistanceToNow(completed)} ago`
          : `created ${formatDistanceToNow(createdAt)} ago`}
      </small>
      <AiOutlineEdit
        className="action opacity-0"
        role="button"
        onClick={() => switchAddToUpdate(id, description)}
      />
      <AiOutlineDelete
        className="action opacity-0"
        role="button"
        onClick={() => deleteTodo(id)}
      />
    </li>
  );
};

export default Todo;
