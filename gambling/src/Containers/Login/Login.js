import React, { useState } from "react";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
const Login = (props) => {
  let [user, setUser] = useState({
    email: "",
    password: "",
  });
  const login = () => {
    axios.post("login", user).then((res) => {
      localStorage.setItem("token", res.data.accessToken);
    });
  };
  return (
    <div className={classes.Login}>
      <h1>Login</h1>
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
      <button onClick={login}>Login</button>
      <p>
        Don't have an account?{" "}
        <Link className={classes.link} to="/register">
          Sign up!
        </Link>
      </p>
    </div>
  );
};

export default Login;