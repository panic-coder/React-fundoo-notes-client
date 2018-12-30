import React, {  Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router,  Route} from "react-router-dom";
import LoginComponent from './components/login';

class App extends Component {
  render() {
    return ( 
      <div>
        <Router>
          <Route path = "" component = { LoginComponent } /> 
        </Router>
      </div>

    );
  }
}

export default App;