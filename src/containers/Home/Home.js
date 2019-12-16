import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/UI/Loader/Loader";
import { Transition } from "react-transition-group";

class Home extends Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 2000);
    this.setState({ isLoading: false });
  }
  render() {
    return (
      <Aux>
        <Transition in={this.state.isLoading} timeout={2000}>
          {state => <Loader show={state} />}
        </Transition>
        <div>HOME</div>
        <Footer />
      </Aux>
    );
  }
}

export default Home;
