import React, { useContext } from "react";
import { Button } from "antd";
import { deleteTodo, updateTodo } from "../context/todo.actions";
import { TodoContext } from "../context/TodoContextProvider";

// //Use of context?
// const ToggleContext = React.createContext("read");

// // Using a Component will be easier to define the behavior/state
// class Toggle extends React.Component{

// }


const TodoTask = (props) => {

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

  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     const todos = await firebaseApi.fetchTodos();
  //     dispatch(setTodos(todos));
  //   }

  //   fetchTodos();
  // }, [dispatch]);

  const handleDeleteTodo = (id) => {
    // TODO: fill in
    dispatch(deleteTodo(id));
  };

  const handleUpdateTodo = (id, new_description) => {
    dispatch(updateTodo(id, new_description));
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
