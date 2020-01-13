import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Store";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AadCard from "./Components/AadharCard/AddCard";

import UpdateAadharCard from "./Components/AadharCard/UpdateAadharCard";
import AadharBoard from "./Components/AadharBoard";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavBar />

        <Router>
          <Route exact path="/" component={AadharBoard}></Route>
          <Route
            exact
            path="/updateAadharCard/:pt_id"
            component={UpdateAadharCard}
          />
          <Route exact path="/addAadharCard" component={AadCard} />
        </Router>
      </Provider>
    );
  }
}
export default App;
