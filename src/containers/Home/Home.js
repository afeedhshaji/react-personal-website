import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/UI/Loader/Loader";
import LoadingOverlay from "react-loading-overlay";
import HomeContent from "../../components/HomeContent/HomeContent";
import HomeBaffle from "../HomeBaffle/HomeBaffle";
import classes from "./Home.module.css";

class Home extends Component {
  state = {
    isLoading: true,
    obfuscate: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
      this.setState({ obfuscate: false });
    }, 2000);
  }
  render() {
    console.log(this.state.obfuscate);
    return (
      <Aux>
        <LoadingOverlay
          active={this.state.isLoading}
          spinner={<Loader />}
        ></LoadingOverlay>
        <div className={classes.centerWrap}>
          <HomeBaffle obfus={this.state.obfuscate} />
          <HomeContent />
        </div>

        <Footer />
      </Aux>
    );
  }
}

export default Home;
