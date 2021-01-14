import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';


function Heading(){
  return <h1>Select an illness:</h1>;
}

ReactDOM.render(
  <div>
  <Heading/>
    <p className = "button">illness.name</p>
    <p className = "button">illness.name</p>
    <p className = "button">illness.name</p>
    <p className = "button">illness.name</p>
  </div>,
  document.getElementById('root')

)
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
