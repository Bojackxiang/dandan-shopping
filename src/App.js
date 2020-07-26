import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import { selectCartHidden } from "./redux/cart/cart.selector";
// pages
import CheckPage from "./pages/CheckPage/CheckPage";
import Homepage from "./pages/HomePage/Homepage";
import ShopPage from "./pages/ShopPage/ShopPage";
import SignInPage from "./pages/SignIn/SignInPage";
import SignUpPage from "./pages/SignUp/SignupPage";
// component
import Header from "./components/Header/Header";
// style
import "./App.css";




class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    // -> 下面的基本上就是 subscriber，会一直监听
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const userRef = await createUserProfileDocument(authUser);

        // -> 拿到了用户登录之后，直接在state中设置当前用户
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  redirect() {
    const { currentUser } = this.props;

    if (currentUser === null || !currentUser) return <SignInPage />;

    return <Redirect to="/" />;
  }

  render() {
    return (
      <>
        <Header />
        <div style={{marginLeft: 20, marginRight: 20}}>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/signin" render={() => this.redirect()} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/checkout" component={CheckPage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
        </div>
        
      </>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser, 
  isCartDispaly: selectCartHidden
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  // 这便是dispatch 了一个function
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

/**
 * 越是父页面就越要 exact
 *
 * props 中的三个参数：match，history，location
 * Link 和 props.history.push() 都可以帮我们进行导航
 */
