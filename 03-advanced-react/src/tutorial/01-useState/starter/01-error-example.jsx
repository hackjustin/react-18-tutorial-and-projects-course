import React, { useState } from 'react';

const ErrorExample = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>useState error example</h2>;
      <h1>Count: {count}</h1>
      <button className="btn" git puonClick={() => setCount(count + 1)}>Increase</button>
    </>
  )
};

export default ErrorExample;
