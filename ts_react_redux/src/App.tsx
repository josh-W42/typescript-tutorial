import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos } from "./actions";
import { StoreState } from "./reducers";

// common convention for props is to use an
// interface to describe props and use "?" for
// props that may or may not be present
interface AppProps {
  color?: string;
  fetchTodos(): any;
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

  const renderList = (): JSX.Element[] => {
    return props.todos.map((todo: Todo) => {
      return <div key={todo.id}>{todo.title}</div>;
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

const App = connect(mapStateToProps, { fetchTodos })(_App);

export default App;
