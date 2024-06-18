import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const history = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { email, password } = user;

    try {
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("Response status:", res.status);
      console.log("Response data:", data);

      if (res.status === 422 || res.status === 404 || res.status === 401 || !data) {
        window.alert(data.message);
        console.log(data.message);
      } else {
        window.alert(data.message);
        console.log(data.message);
        history("/notepad");
      }
    } catch (error) {
      console.error("Error during login:", error);
      window.alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="container w-50 p-4">
      <h1 className="text-center mt-5">LOGIN</h1>
      <hr className="w-25 mx-auto" />
      <form method="POST">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={user.email}
            onChange={handleInputs}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={user.password}
            onChange={handleInputs}
            placeholder="Password"
            required
          />
        </div>
        <button
          type="submit"
          onClick={PostData}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
