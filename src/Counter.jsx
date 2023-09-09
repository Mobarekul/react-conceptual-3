import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleReduce = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  return (
    <div style={{ border: "solid 2px salmon" }}>
      <h4>Counter : {count}</h4>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
}
