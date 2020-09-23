// The one that actually perform the action
import { SET_TODOS, ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./todo.actions";

export const todoReducer = (state, action) => {
  const { type, data } = action;
  //Type identify what is the action to do
  switch (type) {
    case SET_TODOS:
      return { ...state, todos: data };
    case ADD_TODO:
      const todos = {
        ...state.todos,
        [data.id]: { description: data.description },
      };
      return { ...state, todos };
    case DELETE_TODO:
      
      // To delete based on id
      // If null, will define with data which is an initialized Object
      delete state.todos[data.id];
      const after_deleted = state.todos || data;

      return {
        ...state, //spread operator: do a copy of state.todos
        todos: after_deleted
      }
    case UPDATE_TODO:
      const updated = {
        ...state.todos,
        [data.id]: { description: data.new_description }
      }
      return { ...state, updated };
    default:
      return state;
  }
};
