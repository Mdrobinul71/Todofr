import React, {  useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoList from "../todos/TodoList";


function Notepad() {
  const history=useNavigate()
  const [user, setUser] = useState({
  });

  const callbackend = async () => {
    try {
      const resdata =await fetch("/notepad", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await resdata.json();
      console.log(data);
      setUser(data);
      if (!resdata.status === 200) {
        const error = new Error(resdata.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history("/login");
    }
  };

  useEffect(() => {
    callbackend();
  },[]);

  return (
    <>
      <div className="text-center mt-4 mb-4">
        <h1>This is user info page</h1>
        <h2>{`Your name is ${user.name}`}</h2>
        <h2>{`Your work with ${user.work}`}</h2>
      </div>
      <div>
        <TodoList />
      </div>
      
    </>
  );
}

export default Notepad;
