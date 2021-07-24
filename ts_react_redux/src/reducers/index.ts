import { todosReducer } from "./todos";
import { combineReducers } from "redux";
import { Todo } from "../actions";

/*
  This will express the entire state of our store.
  This is useful because this allows us to type check
  everything in our store and if someone new were to
  come in and figure out what's in the store, they could
  do that here.
*/
export interface StoreState {
  todos: Todo[];
}

// we just need one basic reducer
export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
