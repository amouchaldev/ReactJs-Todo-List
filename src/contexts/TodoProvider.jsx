import TodoContext from "./TodoContext";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
// import
const TodoProvider = ({ children }) => {
  // form input reference
  let descriptionInput = useRef("");
  // my todos list state
  let [todos, setTodos] = useState([
    {
      id: 1,
      description: "blabla 1",
      completed: false,
      createdAt: new Date("2023/01/11 12:00:00"),
    },
    {
      id: 2,
      description: "blabla 2",
      completed: false,
      createdAt: new Date("2022/12/20"),
    },
    {
      id: 3,
      description: "blabla 3",
      completed: new Date(),
      createdAt: new Date("2022/10/11"),
    },
    {
      id: 4,
      description: "blabla 4",
      completed: false,
      createdAt: new Date("2022/12/19"),
    },
    {
      id: 5,
      description: "blabla 5",
      completed: false,
      createdAt: new Date("2022/12/29"),
    },
  ]);
  // btn state by default it's an add button
  let [btnState, setBtnState] = useState({
    type: "info",
    slot: "Add",
  });

  // add new todo function
  const addTodo = (e, todoDescription) => {
    e.preventDefault();
    // prevent user from adding empty string
    if (todoDescription.trim() == "") {
      Swal.fire({
        icon: "question",
        title: "Oops...",
        text: "Please Write Something First !",
        confirmButtonColor: "#56cc9d",
      });
    } else {
      const newTodo = {
        id: uuidv4(),
        description: todoDescription,
        completed: false,
        createdAt: new Date(),
      };
      setTodos([newTodo, ...todos]);
      // reset form after adding todo
      e.target.reset();
    }
  };

  // function delete specific todo
  const deleteTodo = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#78c2ad",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const newTodos = todos.filter((todo) => todo.id != id);
        setTodos([...newTodos]);
        Swal.fire("Deleted!", "Your Todo has been deleted.", "success");
        descriptionInput.current.value = "";
        setBtnState({
          type: "info",
          slot: "Add",
        });
      }
    });
  };
  // function take in parameter event and new value
  function updateTodo(e, todoId,  newDescription) {
    e.preventDefault();
    // prevent user from adding empty string
    if (newDescription.trim() == "") {
      Swal.fire({
        icon: "question",
        title: "Oops...",
        text: "Please Write Something First !",
        confirmButtonColor: "#56cc9d",
      });
    } else {
      // create new list of todos and change specific todo
      const updateMyTodo = todos.map((todo) => {
        if (todo.id == todoId) {
          return {
            ...todo,
            description: newDescription,
            createdAt: new Date(),
          };
        } else return todo;
      });
      setTodos(updateMyTodo);
      // reset input after updating todo
      e.target.reset();
      // reset button state to add state
      setBtnState({
        type: "info",
        slot: "Add",
        onclickFunction: addTodo,
      });
    }
  }
  // function that change form from add todo to update todo
  function switchAddToUpdate(todoID, description) {
    descriptionInput.current.value = description;
    setBtnState({
      type: "success",
      slot: "Update",
      todoID
    });
  }

  function cancelUpdate(e) {
    e.preventDefault()
      descriptionInput.current.value = "";
      setBtnState({
        type: "info",
        slot: "Add",
      });
  }
  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        addTodo,
        deleteTodo,
        updateTodo,
        descriptionInput,
        btnState,
        switchAddToUpdate,
        cancelUpdate
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
