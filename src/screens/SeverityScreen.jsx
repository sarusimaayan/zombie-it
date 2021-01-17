import Heading from "../components/Heading";
import SeverityButton from "../components/SeverityButton";
import { useHistory } from "react-router-dom";


export default function SeverityScreen(props){
  const history = useHistory();
  const state = props.history.location.state;
  let illnessName = "";
  if (state){
    illnessName = state.name;
  }

  // function handleSubmit(event) {
  //   const submitData severityLevel...
  // }

    return (
          <div>
            <Heading text = "Select severity level:" />
            <h2>{illnessName}</h2>
              <SeverityButton
                onClick={function (levelOfPain){
                   history.push("/hospitals", levelOfPain)}}
              />
          </div>
        )
}
