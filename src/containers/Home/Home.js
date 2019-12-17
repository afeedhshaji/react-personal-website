import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/UI/Loader/Loader";
import LoadingOverlay from "react-loading-overlay";

class Home extends Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  }
  render() {
    return (
      <Aux>
        <LoadingOverlay
          active={this.state.isLoading}
          spinner={<Loader />}
        ></LoadingOverlay>
        <div>HOME</div>
        <Footer />
      </Aux>
    );
  }
}

export default Home;
