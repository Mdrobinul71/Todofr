
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://notepad-i5rb.onrender.com/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Not Logout");
        } else {
          console.log("Logout successful");
          navigate("https://notepad-i5rb.onrender.com/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [navigate]);

  return (
    <div>
      <h1>Logout Successful</h1>
    </div>
  );
}

export default Logout;

/* import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const history=useNavigate()
  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Not Logout");
        }
      })
      .then((res) => {
        if (res === 200) {
          console.log("log out succes");
          history("/login")
        }
      }).catch((err)=>{
        console.log(err)
      });
  });
  return <div><h1>Logout Succes</h1></div>;
}

export default Logout;
*/
