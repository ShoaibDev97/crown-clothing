import React, { Component } from "react";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Shop from "./Pages/Shop/Shop.jsx";
import Header from "./Components/Header/Header.jsx";
import SignInSignUp from "./Pages/Sign-In-And-Sign-Up/SignInSignUp.jsx";
import { auth } from "./firebase/firebase.utils";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
