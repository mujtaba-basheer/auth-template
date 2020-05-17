import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Login from "./Login";
import Register from "./Register";
import Account from "./Account";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";

const App = () => {

  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">
            <img
              src="https://www.pikpng.com/pngl/b/73-732011_aws-cognito-logo-png-transparent-aws-cognito-icon.png"
              alt="cognoto logo"
            />
          </Link>
        </header>
        <Router>
          <Login path="/" />
          <Login path="/login" />
          <Register path="/register" />
          <Account path="/account" />
          <ForgotPassword path="/forgot-password" />
          <ResetPassword path="/reset-password" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
