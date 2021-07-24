import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

const url = "https://jsonplaceholder.typicode.com/todos";

/*
  Pre interface

  Pros:
    looks like js,
    makes sense
  Cons:
    looks like js (not a lot of type safety)
    
  one way to fix our action is to use an interface

  another thing we should consider is making an enum for
  redux types
*/
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

/*
  We're going to do something optional but can be 
  useful in the long run for error checking

  So we provide an interface for the Dispatch variable
  so that we can make sure we have additional type safety
  and it can be re
*/

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};
