import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  return <div>
    <h2>you clicked {count} times</h2>
    <button className='btn' onClick={() => setCount(count + 1)}>click me</button>
  </div>
};

export default UseStateBasics;
