import React, { useState, useEffect } from 'react';
import api from '../api';
import Heading from "../components/Heading";
import IllnessButton from "../components/IllnessButton";
import { useHistory } from "react-router-dom";


export default function IllnessesScreen() {
  const history = useHistory();
  const [illnesses, setIllnesses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

//Get the full illnesses array from the server
  useEffect(function() {
    try {
      async function fetchIllnesses(){
        const illnessesResponse = await api.getIllnesses();
        console.log(illnessesResponse.data);
        setIllnesses(illnessesResponse.data);
        setIsLoading(false);
      }

      fetchIllnesses();

    } catch (err) {
      setIsError(true);
    }
  }, []);



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
              <IllnessButton
                name={illnessObject.name}
                onClick={() => history.push("/severity", illnessObject)}
              />
            )
          })}
        </div>
      )
    )
  );
}
