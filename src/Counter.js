import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <span className="button" onClick={() => decrement()}>-</span>
      <span>{count}</span>
      <span className="button" onClick={() => increment()}>+</span>
    </div>
  );
};

export default Counter;
