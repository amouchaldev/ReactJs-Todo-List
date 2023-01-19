import { useContext } from "react";
import TodoContext from "../contexts/TodoContext";
import Button from "./partials/Button";
const Form = () => {
  const {
    descriptionInput,
    addTodo,
    updateTodo,
    btnState: { type, slot },
    cancelUpdate
  } = useContext(TodoContext);
  return (
    <form
      className="d-flex justify-content-center align-items-center mb-4"
      onSubmit={(e) => {
        // info refers to add todo function and success refers to update todo function
        type == "info"
          ? addTodo(e, descriptionInput.current.value)
          : updateTodo(e, descriptionInput.current.value);
      }}
      >
      <div className="form-outline flex-fill">
        <input
          type="text"
          ref={descriptionInput}
          className="form-control"
          placeholder={type == "info" ? "New Todo ..." : "Update todo ..."}
        />
      </div>
      <Button type={type}>{slot}</Button>
      {
      type == 'success' && <Button type='dark' onclickFn={cancelUpdate}>Cancel</Button>
      }
    </form>
  );
};

export default Form;
