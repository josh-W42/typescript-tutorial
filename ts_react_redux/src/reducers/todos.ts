import { ActionTypes } from "../actions/types";
import { Todo, FetchTodosAction } from "../actions";

/*
  Ok this works now, but you can keep this reducer like
  this because when we have more actions this will be an
  issue.
*/

export const todosReducer = (state: Todo[] = [], action: FetchTodosAction) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};
