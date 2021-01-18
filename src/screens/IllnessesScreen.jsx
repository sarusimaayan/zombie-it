import React, { useState, useEffect } from 'react';
import api from '../api/apiUtils';
import Heading from "../components/Heading";
import IllnessButton from "../components/IllnessButton";
import { useHistory } from "react-router-dom";


const IllnessesScreen = () => {
  const history = useHistory();
  const [illnesses, setIllnesses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

//Get the full illnesses array from the server
  useEffect(() => {
    try {
      const fetchIllnesses = async() =>{
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
        <div className="container">
          <div className="inner-center">
            <Heading text = "Select an illness:" />
            {illnesses.map((illnessObject, index) => {
              return(
                <IllnessButton
                  name={illnessObject.name}
                  onClick={() => history.push("/severity", illnessObject)}
                />
              )
            })}
            </div>
        </div>
      )
    )
  );
}

export default IllnessesScreen;
