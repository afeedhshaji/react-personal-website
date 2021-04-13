import React, { Component } from "react";
import Error from "./components/Error/Error";
import Home from "./containers/Home/Home";
import Layout from "./hoc/Layout/Layout";
import { Switch, Route } from "react-router-dom";
import ProjectBox from "./components/ProjectBox/ProjectBox";

class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/projects' component={ProjectBox} />
            <Route component={Error} />
          </Switch>
        </Layout>
      </>
    );
  }
}

export default App;
