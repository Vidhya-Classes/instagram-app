import { useEffect, useState, useRef } from 'react';

const CDU = () => {
  const [counter, setCounter] = useState(0);

  const mounted: any = useRef();

  useEffect(() => {
    if (!mounted.current) {
      // do componentDidMount logic
      console.log('ComponentDidMount');
      mounted.current = true;
    } else {
      // do componentDidUpdate logic
      console.log('componentDidUpdate');
    }
  });

  useEffect(() => {
    console.log('Mounting');

    return () => {
      console.log('Unmounting: ', counter);
    };
  }, []);

  useEffect(() => {
    console.log('Counter: ', counter);

    return () => {
      console.log('Component did  update: ', counter);
    };
  }, [counter]);

  return (
    <>
      <p>{counter}</p>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>Increment</button>
    </>
  );
};

export default CDU;
