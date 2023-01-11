import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import TodoContext from "../contexts/TodoContext";
import Todo from "../components/Todo";

const Todos = () => {
  const { segment } = useParams();
  const { todos } = useContext(TodoContext);

  // get all todos if segment is undefined
  if (!segment) return todos.map(todo => <Todo key={todo.id} todo={todo} />);
  // get only completed todos
  else if (segment == "completed") {
    return todos.map(
      todo => todo.completed && <Todo key={todo.id} todo={todo} />
    );
  }
  // get only uncompleted todos
  else if (segment == "uncompleted") {
    return todos.map(
      todo => !todo.completed && <Todo key={todo.id} todo={todo} />
    );
  }
};

export default Todos;
