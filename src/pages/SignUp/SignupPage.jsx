import React, { Component } from "react";

import FormInput from "../../components/formInput/FormInput";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./signup.style.scss";
import Button from "../../components/Button/Button";
import { withRouter } from "react-router-dom";

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  async onFormSubmitHandler(e) {
    e.preventDefault();

    const { email, displayName, password, confirmPassword } = this.state;

    // -> password 是否 match
    if (!password || !confirmPassword || password !== confirmPassword) return;

    // -> create user through firebase
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      // reset user input
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      // redirect to the main page when success
      this.props.history.push("/");
    } catch (error) {
      console.error(error.message)
    }
  }

  inputChangeHandler(e) {
    this.setState(
      {
        ...this.state,
        [e.target.name]: e.target.value,
      },
      () => {}
    );
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <>
        <div className="sign-up">
          <form onSubmit={(e) => this.onFormSubmitHandler(e)}>
            <FormInput
              onChangeHandler={(e) => this.inputChangeHandler(e)}
              label="Display Name"
              name="displayName"
              value={displayName}
              required={true}
            />

            <FormInput
              onChangeHandler={(e) => this.inputChangeHandler(e)}
              label="email"
              name="email"
              value={email}
              required={true}
            />

            <FormInput
              onChangeHandler={(e) => this.inputChangeHandler(e)}
              label="password"
              name="password"
              value={password}
              required={true}
              type="password"
            />

            <FormInput
              onChangeHandler={(e) => this.inputChangeHandler(e)}
              label="confirm password"
              name="confirmPassword"
              value={confirmPassword}
              required={true}
              type="password"
            />

            <Button text="Sign Up Now" type="submit" />
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(SignUpPage);
