import React,{useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const userContact = async () => {
    try {
      const res = await fetch("https://notepad-i5rb.onrender.com/getdata/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userContact();
  }, []);

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const contactForm = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = userData;

    try {
      const resdata = await fetch("https://notepad-i5rb.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      });

      const data = await resdata.json();
      if (!data) {
        alert("Message not sent");
        console.log("Message not sent");
      } else {
        alert("Message sent");
        setUserData({ ...userData, message: "" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container w-80 p-4">
      <h1 className="text-center mt-5 ck">CONTACT US</h1>
      <hr className="w-25 mx-auto" />
      <form method="POST">
        <div className="form-group">
          <label htmlFor="name">Your name:</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            className="form-control"
            onChange={handleInputs}
            placeholder="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={userData.email}
            className="form-control"
            onChange={handleInputs}
            placeholder="email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="number"
            name="phone"
            value={userData.phone}
            className="form-control"
            onChange={handleInputs}
            placeholder="phone"
          />
        </div>

        <div className="form-group">
          <label className="textarea">Message</label>
          <textarea
            className="form-control"
            name="message"
            value={userData.message}
            onChange={handleInputs}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary" onClick={contactForm}>
          Submit
        </button>
      </form>
      <NavLink className="nav-link active" aria-current="page" to="/login">
        <p className="text-center">If contact form not work please login first!</p>
      </NavLink>
    </div>
  );
};

export default Contact;

/*
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: " ",
    email: " ",
    phone: " ",
    message: " ",
  });

  const userContact = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          //Accept: "application/json",
          "Content-Type": "application/json",
        },
        //credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    userContact();
  }, []);

  //we are storing data in state
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  //send data backend
  const contactForm = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = userData;

    const resdata = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });

    const data = await resdata.json();
    if (!data) {
      alert("message not send");
      console.log("message not send");
    } else {
      alert("message send");
      setUserData({ ...userData, message: "" });
    }
  };

  return (
    <div className="container w-80 p-4">
      <h1 className="text-center mt-5 ck">CONTACTUS</h1>
      <hr className="w-25 mx-auto" />
      <form method="POST">
        <div className="form-group">
          <label for="name">Your name:</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            className="form-control"
            onChange={handleInputs}
            placeholder="name"
          />
        </div>
        <div className="form-group">
          <label for="email">Email</label>
          <input
            type="text"
            name="email"
            value={userData.email}
            className="form-control"
            onChange={handleInputs}
            placeholder="email"
          />
        </div>

        <div className="form-group">
          <label for="phone">phone</label>
          <input
            type="number"
            name="phone"
            value={userData.phone}
            className="form-control"
            onChange={handleInputs}
            placeholder="phone"
          />
        </div>

        <div className="form-group">
          <label className="textearia">Text area</label>
          <textarea
            className="form-control"
            name="message"
            value={userData.message}
            onChange={handleInputs}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary" onClick={contactForm}>
          Submit
        </button>
      </form>
      <NavLink className="nav-link active" aria-current="page" to="/login">
      <p className="text-center">If contact form not work pls login frist!</p>
      </NavLink>
  
    </div>
  );
};

export default Contact;
*/
