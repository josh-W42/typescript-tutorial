import { FetchTodosAction, DeleteTodoAction } from "./todos";
// import { FetchBlogs, DeleteBlogs } from './todos'; // if we had other actions

/*
  For Redux action types they really just need to be
  unique, so default behavior of enums
  (assigning  0, 1, 2... to new values),
  is fine for now
*/

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

/*
  express one type of Action for your reducers
  but the issue still remains with me adding action type unions
  to this type... that's not scalable

  it makes it easier in the reducer file but not so much here..
  
*/

export type Action = FetchTodosAction | DeleteTodoAction;
