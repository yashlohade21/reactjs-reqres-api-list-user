import React, {Component} from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import RouterComponent from "./router";
// import {CardWrapper} from './components/cards-wrapper.component';


class App extends Component {
  render() {
    return (
      <>
        <RouterComponent />
      </>
    );
  }
}
export default withRouter(
  connect(
    null,
    null
  )(App)
);