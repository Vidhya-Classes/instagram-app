import { useState } from 'react';

const Batching = () => {
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);

  const updateCounter = () => {
    setCounter((prevState) => prevState + 1);
    setCounter((prevState) => prevState + 1);
    setCounter((prevState) => prevState + 1);
    setCounter((prevState) => prevState + 1);
    setCounter((prevState) => prevState + 1);
    setCounter((prevState) => prevState + 1);
    setCounter((prevState) => prevState + 1);
    setCounter((prevState) => prevState + 1);
    setCounter((prevState) => prevState + 1);
    setCounter((prevState) => prevState + 1);

    setToggle(!toggle);
    setToggle((prevState) => !prevState);
  };

  const updateCounter2 = () => {
    setCounter((prevState) => prevState + 1);
    setCounter((prevState) => prevState + 1);
    setCounter((prevState) => prevState + 1);
    setCounter((prevState) => prevState + 1);
    setCounter((prevState) => prevState + 1);
    setCounter((prevState) => prevState + 1);
    setCounter((prevState) => prevState + 1);
    setCounter((prevState) => prevState + 1);
    setCounter((prevState) => prevState + 1);
    setCounter((prevState) => prevState + 1);
  };

  console.log('Re-render: ', counter);

  return (
    <>
      <p>{counter}</p>
      <button onClick={updateCounter}>Increment</button>
      <button onClick={updateCounter2}>Decrement</button>
    </>
  );
};

export default Batching;
