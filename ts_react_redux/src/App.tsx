import React, { useState } from "react";

// common convention for props is to use an
// interface to describe props and use "?" for
// props that may or may not be present
interface AppProps {
  color?: string;
}

// as a class component
// class App extends React.Component<AppProps> {
//   state = { counter: 0 };
//   // it's important to note that for a class component
//   // you must state the "state" value outside of the
//   // constructor (if you use a constructor)

//   handleClick = (num: number): void => {
//     this.setState({ counter: this.state.counter + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={(): void => this.handleClick(1)}>Increment +</button>
//         <button onClick={(): void => this.handleClick(-1)}>Increment -</button>
//       </div>
//     );
//   }
// }

// as a functional component
function App(props: AppProps): JSX.Element {
  const [counter, setCounter] = useState(0);

  const handleClick = (num: number): void => {
    setCounter(counter + num);
  };

  return (
    <>
      <p>Count: {counter}</p>
      <button onClick={(): void => handleClick(1)}>Increase +</button>
      <button onClick={(): void => handleClick(-1)}>Decrease -</button>
    </>
  );
}

export default App;
