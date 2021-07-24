import { Todo, ActionTypes, Action } from "../actions";

/*
  Ok this works now, but you can keep this reducer like
  this because when we have more actions this will be an
  issue.
*/

export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
