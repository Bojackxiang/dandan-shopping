import React, { Component } from "react";
import FormInput from "../../components/formInput/FormInput";
import "./signin.style.scss";
import Button from "../../components/Button/Button";
import BlankSpace from "../../components/BlankSpace/BlankSpace";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  signInWithAuth = null;

  async handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const { history } = this.props;

    try {
      this.signInWithAuth = await auth.signInWithEmailAndPassword(
        email,
        password
      );
      history.push("/");
    } catch (error) {
      console.error(error.message)
    }
  }

  onChangeHandler(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  componentWillUnmount() {
    // -> firebase 会存在unmounted的现象
    this.signInWithAuth = null;
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="sign-in">
        <h2>I already have a account</h2>
        <BlankSpace height={10} />

        <span>Sign in with you email and password</span>

        <form
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          <FormInput
            label="email"
            name="email"
            value={email}
            onChangeHandler={(e) => this.onChangeHandler(e)}
          />

          <FormInput
            label="password"
            name="password"
            value={password}
            onChangeHandler={(e) => this.onChangeHandler(e)}
          />

          <div className="button-group">
            <div>
              <Button
                text="submit"
                onClickHandler={(e) => {
                  this.handleSubmit(e);
                }}
              />
            </div>

            <div>
              <Button
                text="Sign in with google"
                onClickHandler={signInWithGoogle}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(withRouter(SignInPage));

/**
 * Todo: sign in with google 之后要redirect to the main page
 */

/**
 * -> Note
 * class 中，如果是传给自元素，onchangeHandler要写完整，里面钥匙一个完整的function，要不然找不到this
 */
