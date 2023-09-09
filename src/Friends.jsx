import { useEffect, useState } from "react";
import "./Friends.css";
import Friend from "./Friend";
export default function Friends() {
  const [user, userState] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => userState(data));
  }, []);
  return (
    <div className="box">
      <h3>Friends: {user.length}</h3>
      {user.map((friend) => (
        <Friend friend={friend}></Friend>
      ))}
    </div>
  );
}
