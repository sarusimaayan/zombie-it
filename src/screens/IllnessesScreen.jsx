import React, { Component } from 'react';
import api from '../api';
import Heading from "../components/Heading";
import IllnessButton from "../components/IllnessButton";


class IllnessesScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
        illnesses: [],
        isLoading: true,
        isError: false,
    }
  }

  componentDidMount = async () => {
    // will run after the component is rendered in the DOM

      try{
        const illnessesArray = await api.getIllnesses();
        console.log(illnessesArray.data);
        this.setState({
            illnesses: illnessesArray.data,
            isLoading: false,
        });

      } catch (err) {
        this.setState({
          isError: true,
        })
      }

  }

  render() {
    const { illnesses, isLoading, isError } = this.state;
    return (
      isError ? (
        <div>error</div>
      )
      : (
        isLoading ? (
          <div>loading</div>
        ) : (
          <div>
          <Heading text = "Select an illness:" /> 
            {illnesses.map(function(illnessObject, index){
              return(
                <IllnessButton name = {illnessObject.name}/>
              )
            })}
          </div>
        )
      )
    );
  }
}

export default IllnessesScreen;
