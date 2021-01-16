import React, { Component } from 'react'
import Heading from "../components/Heading";
import HospitalButton from "../components/HospitalButton";

class HospitalsScreen extends Component {
    render() {
        return (
            <div>
              <Heading text = "Our suggested hospitals:" />
              <HospitalButton name = "Balmain Hospital" waitTime = "200"/>
              <HospitalButton name = "Concord Hospital" waitTime = "700"/>
              <HospitalButton name = "Westmead Hospital" waitTime = "20"/>
              <HospitalButton name = "RPA" waitTime = "1440"/>
              <HospitalButton name = "Canterbury Hospital" waitTime = "60"/>
            </div>
        )
    }
}

export default HospitalsScreen;
