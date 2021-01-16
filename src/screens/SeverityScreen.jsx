import React, { Component } from 'react';
// import api from '../api';
import Heading from "../components/Heading";
import SeverityButton from "../components/SeverityButton";


class SeverityScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
        // isLoading: true,
        // isError: false,
    }
  }

  render() {
    const { isLoading, isError } = this.state;
    return (
      // isError ? (
      //   <div>error</div>
      // )
      // : (
      //   isLoading ? (
      //     <div>loading</div>
      //   ) : (
          <div>
          <Heading text = "Select severity level:" />
            <h2>Add Illness Name here</h2>
            <SeverityButton/>
            })}
          </div>
        )
      // )
    // );
  }
}

export default SeverityScreen;