import React, { useContext, useEffect, useState } from "react";
import { Button } from "antd";
import { deleteTodo, updateTodo, setTodos } from "../context/todo.actions";
import { TodoContext } from "../context/TodoContextProvider";
import { firebaseApi } from "../services/firebaseApi";

// //Use of context?
// const ToggleContext = React.createContext("read");

// // Using a Component will be easier to define the behavior/state
// class Toggle extends React.Component{

// }


const TodoTask = (props) => {
  // const [inputValue, setInputValue] = useState("");
  
  // //Setting the state to be readMode
  // const [readMode, setReadMode] = useState(true);

  // //Store into a variable
  // let todoItem = <div className="todo-task__name" data-cy="todo-task__name"> {props.description} </div>;

  // //If readMode is not true
  // if(!readMode){
  //   todoItem =<Input
  //   value={inputValue}
  //   onChange={({ target: { value } }) => setInputValue(value)}
  //   placeholder="Add a TODO"
  //   size="large"
  //   className="todo-input__input"
  //   data-cy="todo-input__input"
  //   />
  // }


  return (
    <div className="todo-task">
      {/* <Toggle /> */}
      <div className="todo-task__name" data-cy="todo-task__name">
        {props.description}
      </div>
      <Button
        type="primary"
        shape="round"
        className="todo-task__button"
        data-cy="todo-task__button-update"
        onClick={() => {}}
      >
        Update
      </Button>
      <Button
        type="primary"
        shape="round"
        className="todo-task__button"
        data-cy="todo-task__button-delete"
        onClick={() => props.delete(props.id)}
      >
        Delete
      </Button>
    </div>
  );
};

// A list of TODOS 
export const TodoList = () => {
  // The state returns the list of todos; // unpackage the functions
  // dispatch is a function
  const { state, dispatch } = useContext(TodoContext);

  useEffect(() => {
    const fetchTodos = async () => {
      //Set the todos as retrieved from Firebase
      const todos = await firebaseApi.fetchTodos();
      dispatch(setTodos(todos));
    }

    fetchTodos();
  }, [dispatch]);

  const handleDeleteTodo = (id) => {
    // TODO: fill in
    dispatch(deleteTodo(id));
    firebaseApi.deleteTodo(id);
  };

  const handleUpdateTodo = (id, new_description) => {
    dispatch(updateTodo(id, new_description));
    firebaseApi.updateTodo(id, new_description);
  };

  return (
    <div className="todo-list" data-cy="todo-list">
      {Object.entries(state.todos).map(([id, todo]) => (
        <TodoTask
          key={id}
          description={todo.description}
          update={handleUpdateTodo}
          delete={handleDeleteTodo}
          id={id}
        />
      ))}
    </div>
  );
};
