import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from "./components/Login";
import {IllnessesScreen, SeverityScreen, HospitalsScreen} from './screens';


// import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = "/login" exact component = {Login}/>
          <Route path = "/illnesses" exact component = {IllnessesScreen}/>
          <Route path = "/severity" exact component = {SeverityScreen}/>
          <Route path = "/hospitals" exact component = {HospitalsScreen}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
