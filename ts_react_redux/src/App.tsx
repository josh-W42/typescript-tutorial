import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "./actions";
import { StoreState } from "./reducers";

/*
  Typical React-Redux Flow

    wire up an action,
    wiring up an action creator,
    modifying out reducer,
    attaching the action creator back to app component
*/

// common convention for props is to use an
// interface to describe props and use "?" for
// props that may or may not be present
interface AppProps {
  fetchTodos: Function;
  deleteTodo: Function;
  todos: Todo[];
}

// as a functional component
function _App(props: AppProps): JSX.Element {
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //    props.fetchTodos();
  // }, []);

  // const handleClick = (num: number): void => {
  //   setCounter(counter + num);
  // };

  const handleTodoFetch = () => {
    props.fetchTodos();
  };

  const onTodoClick = (id: number): void => {
    props.deleteTodo(id);
  };

  const renderList = (): JSX.Element[] => {
    return props.todos.map((todo: Todo) => {
      return (
        <div key={todo.id} onClick={() => onTodoClick(todo.id)}>
          {todo.title}
        </div>
      );
    });
  };

  return (
    <>
      {/* <p>Count: {counter}</p> */}
      {/* <button onClick={(): void => handleClick(1)}>Increase +</button>
      <button onClick={(): void => handleClick(-1)}>Decrease -</button> */}

      <button onClick={handleTodoFetch}>Fetch</button>
      {renderList()}
    </>
  );
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);

export default App;
