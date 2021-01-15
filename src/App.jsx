import logo from './logo.svg';
import './App.css';
// import './styles.css';
import Heading from "./components/Heading";
import IllnessButton from "./components/IllnessButton";
import HospitalButton from "./components/HospitalButton";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Heading text = "Select an illness:" />
          <IllnessButton name = "Mortal Cold"/>
          <IllnessButton name = "bla bla"/>
          <IllnessButton name = "some long name"/>
          <IllnessButton name = "don't forget to add tests don't forget to add tests"/>
          <IllnessButton name = "covidShit"/>

        <Heading text = "Our suggested hospitals:" />
          <HospitalButton name = "Balmain Hospital" waitTime = "200"/>
          <HospitalButton name = "Concord Hospital" waitTime = "700"/>
          <HospitalButton name = "Westmead Hospital" waitTime = "20"/>
          <HospitalButton name = "RPA" waitTime = "1440"/>
          <HospitalButton name = "Canterbury Hospital" waitTime = "60"/>

      </header>
    </div>
  );
}

export default App;
