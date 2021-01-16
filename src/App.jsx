import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
// import './styles.css';

import {IllnessesScreen, HospitalsScreen} from './screens';
// import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = "/illnesses" exact component = {IllnessesScreen}/>
          <Route path = "/hospitals" exact component = {HospitalsScreen}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
