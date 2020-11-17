import React from "react";
import FormInput from "../Form-Input/FormInput";

import "./SignIn.scss";
import CustomButton from "./../CustomButton/CustomButton";
import { signInWithGoogle } from "../../firebase/firebase.utils";
class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handlerChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an Account</h2>
        <span>Sign In with your email and Password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput type="email" name="email" value={this.state.email} required onChange={this.handlerChange} label="Email" />

          <FormInput type="password" name="password" value={this.state.password} required onChange={this.handlerChange} label="Password" />

          <div className="button">
            <CustomButton type="submit">Sign In</CustomButton>

            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
