import logo from './logo.svg';
import './App.css';
import './styles.css';
import Heading from "./components/Heading";
import IllnessButton from "./components/IllnessButton"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Heading/>
          <p className = "button">illness.name</p>
          <p className = "button">illness.name</p>
          <p className = "button">illness.name</p>
          <p className = "button">illness.name</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;