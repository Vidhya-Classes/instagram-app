import { useEffect, useState } from 'react';

const HomeView = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter === 3) {
      throw new Error('Error');
    }
  }, [counter]);

  const updateCount = () => {
    setCounter((prevState) => prevState + 1);
  };

  return (
    <>
      <p>{counter}</p>
      <button onClick={updateCount}>Increment</button>
    </>
  );
};

export default HomeView;
