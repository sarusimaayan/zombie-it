import Heading from "../components/Heading";
import SeverityButton from "../components/SeverityButton";
import { useHistory } from "react-router-dom";


const SeverityScreen = (props) => {
  const history = useHistory();
  const state = props.history.location.state;
  let illnessName = "";
  if (state){
    illnessName = state.name;
  }

  //  handleSubmit(event) {
  //   const submitData severityLevel...
  // }

    return (
          <div>
            <Heading text = "Select severity level:" />
            <h2>{illnessName}</h2>
              <SeverityButton
                onClick={(levelOfPain) => {
                   history.push("/hospitals", levelOfPain)}}
              />
          </div>
        )
}

export default SeverityScreen;
