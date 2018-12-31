import React, {  Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router,  Route} from "react-router-dom";
import LoginComponent from './components/login';
import GoogleComponent from './components/google';

class App extends Component {
  render() {
    return ( 
      <div>
        <Router>
          <div>
          <Route path = "" component = { LoginComponent } /> 
          <Route path = "/google-login" component = { GoogleComponent } /> 
          </div>
        </Router>
        {/* <Router> */}
        {/* <Route path = "google-login" component = { GoogleComponent } />  */}
        {/* </Router> */}
      </div>

    );
  }
}

export default App;