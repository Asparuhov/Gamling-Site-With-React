import React, { useState } from "react";
import classes from "./Register.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
const Register = (props) => {
  let [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const register = () => {
    axios
      .post("register", user)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className={classes.Register}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button onClick={register}>Register</button>
      <p>
        Already have an account?
        <Link className={classes.link} to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
