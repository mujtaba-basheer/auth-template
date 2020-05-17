import React from "react";
import { Link, navigate } from "@reach/router";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      conf_password: "",
      fullName: "",
      mobileNo: "",
      otp: "",
      isLoading: false,
    };
  }

  handleEmail = (e) => {
    // console.log(e.target.value);
    this.setState({ email: e.target.value });
  };

  handlePassword = (e) => {
    // console.log(e.target.value);
    this.setState({ password: e.target.value });
  };

  handleConfPassword = (e) => {
    // console.log(e.target.value);
    this.setState({ conf_password: e.target.value });
  };

  handleName = (e) => {
    // console.log(e.target.value);
    this.setState({ fullName: e.target.value });
  };

  handleMobileNo = (e) => {
    // console.log(e.target.value);
    this.setState({ mobileNo: e.target.value });
  };

  handleOtp = (e) => {
    // console.log(e.target.value);
    this.setState({ otp: e.target.value });
  };

  handleRegister = () => {
    console.log(this.state);
    navigate("/account");
  };

  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div>
            <label htmlFor="name">
              <input
                type="name"
                id="name"
                placeholder="enter your full name"
                value={this.state.name}
                autoComplete="current-name"
                onChange={(e) => this.handleName(e)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              <input
                type="email"
                id="email"
                placeholder="enter your email"
                value={this.state.email}
                autoComplete="current-email"
                onChange={(e) => this.handleEmail(e)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              <input
                type="password"
                id="password"
                placeholder="enter your password"
                value={this.state.password}
                autoComplete="new-password"
                onChange={(e) => this.handlePassword(e)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="conf_password">
              <input
                type="password"
                id="conf_password"
                placeholder="confirm your password"
                value={this.state.conf_password}
                autoComplete="new-password"
                onChange={(e) => this.handleConfPassword(e)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="mobileNo">
              <input
                type="mobile"
                id="mobileNo"
                placeholder="enter your mobile no"
                value={this.state.mobileNo}
                // autoComplete="current-email"
                onChange={(e) => this.handleMobileNo(e)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="otp">
              <input
                type="number"
                id="otp"
                placeholder="enter otp"
                value={this.state.otp}
                // autoComplete="current-email"
                onChange={(e) => this.handleOtp(e)}
              />
            </label>
          </div>
          <div>
            <button type="submit" onClick={this.handleRegister}>
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
