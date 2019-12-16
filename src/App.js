import React, { Component } from "react";
import Error from "./components/Error/Error";
import Home from "./containers/Home/Home";
import Layout from "./hoc/Layout/Layout";
import Projects from "./containers/Projects/Projects";
import Loader from "./components/UI/Loader/Loader";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/ironman' component={Loader} />
            <Route component={Error} />
          </Switch>
        </Layout>
      </>
    );
  }
}

export default App;
