import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {LoginScreen, IllnessesScreen, SeverityScreen, HospitalsScreen} from './screens';



const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = "/" exact component={LoginScreen}/>
          <Route path = "/illnesses" exact component={IllnessesScreen}/>
          <Route
            path = "/severity"
            exact
            render={(props) => (
              <SeverityScreen {...props} />
            )}
          />
          <Route
            path = "/hospitals"
            exact
            render={(props) => (
              <HospitalsScreen {...props} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
