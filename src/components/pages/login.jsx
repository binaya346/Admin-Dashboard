import React, { useState } from "react";
import { API_HOST } from "../../consts";
import "./login.scss";
import { withRouter } from "react-router-dom";
import { setuser } from "../helper/utils";

const Login = (props) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async () => {
    if (validateEmail(user.email) && user.password.length > 3) {
      try {
        const response = await fetch(`${API_HOST}auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        const data = await response.json();
        if (data.authToken) {
          localStorage.setItem("authToken", data.authToken);
          setuser(data.user);
          props.history.push("/dashboard");
        }
      } catch (err) {
        console.log(err, "error");
      }
    } else {
      setError("Please enter valid inputs");
    }
  };

  return (
    <div className="login-page">
      <div className="login-block">
        <div className="login-block__title">Welcome Back</div>
        <form className="form">
          <div className="input-wrapper">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={user.email}
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="input-wrapper">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={user.password}
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          {error.length > 0 ? (
            <div className="invalid-input">{error}</div>
          ) : null}
        </form>
        <button className="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default withRouter(Login);
