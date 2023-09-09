import "./App.css";
import Counter from "./counter";
import Team from "./Team";
import Users from "./Users";
import Friends from "./friends";

function App() {
  function clickIt() {
    alert("hola react");
  }
  const click2 = () => {
    alert("Hola Mehad");
  };
  const makeFive = (num) => {
    alert(num + 2);
  };
  return (
    <>
      <h1> React Core Concept 2</h1>
      <Users></Users>
      <Counter></Counter>
      <Friends></Friends>
      <Team></Team>
      <button onClick={clickIt}>Click Me</button>
      <button onClick={click2}>Touch Me</button>
      <button onClick={() => alert("Third option")}>Third Touch</button>
      <button onClick={() => makeFive(3)}> makeFive</button>
    </>
  );
}

export default App;
