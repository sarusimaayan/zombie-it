import React, { Component } from 'react';
import api from '../api';
import Heading from "../components/Heading";
import HospitalButton from "../components/HospitalButton";

class HospitalsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
        hospitals: [],
        painLevel:0,
        isLoading: true,
        isError: false,
    };
    // this.calcTotalProcessTime = this.calcTotalProcessTime.bind(this);
  }

  componentDidMount = async () => {
    // will run after the component is rendered in the DOM

      try{
        const hospitalsArray = await api.getHospitals();
        console.log(hospitalsArray.data);


        this.setState({
            hospitals: hospitalsArray.data,
            // painLevel:
            isLoading: false,
        });

      } catch (err) {
        this.setState({
          isError: true,
        })
      }

  };

  calcTotalProcessTime = (hospitalObject, painLevel) => {
    const hospitalWaitingList = hospitalObject.waitingList[painLevel];
    const totalProcessTime =
    hospitalWaitingList.averageProcessTime *
    hospitalWaitingList.patientCount;
    return totalProcessTime;
  }

  render() {
    const painLevel = 3;
    const { hospitals, isLoading, isError } = this.state;
    return (
      isError ? (
        <div>error</div>
      )
      : (
        isLoading ? (
          <div>loading</div>
        ) : (
          <div>
          <Heading text = "Our suggested hospitals:" />
            {hospitals.map(function(hospitalObject, index){
              // const totalProcessTime = this.calcTotalProcessTime(hospitalObject, painLevel);
              // console.log(totalProcessTime);
              return(
                <HospitalButton
                name={hospitalObject.name}
                waitTime={60}
                />
              )
            })}
          </div>
        )
        // waitTime={this.calcTotalProcessTime.bind(this, hospitalObject, painLevel)}

      )
    );
  }
}

export default HospitalsScreen;
