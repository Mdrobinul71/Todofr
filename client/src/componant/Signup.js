import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleChange = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch("https://notepad-i5rb.onrender.com/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });
    
    const data = await res.json();
    if (res.status===422 || !data){
      window.alert("invalid register")
      console.log(data)
    }else{
      window.alert("signup succes")
      console.log(data)
      history("/");
    }
    }
  

  return (
    <>
      <div className="container mt-5 mb-4 w-50">
        <h2 className="text-center">Registration Form</h2>
        <form>
          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label for="phone">Phone</label>
            <input
              type="number"
              className="form-control"
              name="phone"
              id="phone"
              value={user.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>
          <div className="form-group">
            <label for="work">Work</label>
            <input
              type="text"
              className="form-control"
              name="work"
              id="work"
              value={user.work}
              onChange={handleChange}
              placeholder="Enter your workplace"
            />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group">
            <label for="cpassword">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="cpassword"
              id="cpassword"
              value={user.cpassword}
              onChange={handleChange}
              placeholder="Confirm your password"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            name="signup"
            onClick={postData}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
