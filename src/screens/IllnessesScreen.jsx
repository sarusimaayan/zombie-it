import React, { useState, useEffect } from 'react';
import api from '../api/apiUtils';
import Heading from '../components/Heading';
import IllnessButton from '../components/IllnessButton';
import { useHistory } from 'react-router-dom';
import Storage from '../utils/storageUtils';
import { PATIENT_DATA } from '../utils/constants';

const IllnessesScreen = () => {
  const history = useHistory();
  const [illnesses, setIllnesses] = useState([]);
  const [isError, setIsError] = useState(false);

  //Get the full illnesses array from the server
  useEffect(() => {
    try {
      const fetchIllnesses = async() =>{
        const illnessesResponse = await api.getIllnesses();
        setIllnesses(illnessesResponse.data);
      };
      fetchIllnesses();
    } catch (err) {
      setIsError(true);
    }
  }, []);

  const handleClick = (illnessObject) => {
    Storage.save(PATIENT_DATA.IllnessId, illnessObject.id);
    Storage.save(PATIENT_DATA.IllnessName, illnessObject.name);
    history.push('/severity', illnessObject);
  };

  return (
    isError ? (
      <div>error</div>
    )
      : (
        <div className="container">
          <div className="inner-screen-container">
            <Heading text = "Select an illness:" />
            {illnesses.map((illnessObject) => {
              return(
                <IllnessButton
                  key={illnessObject.id}
                  name={illnessObject.name}
                  onClick={() => handleClick(illnessObject)}
                />
              );
            })}
          </div>
        </div>
      )
  );
};

export default IllnessesScreen;
