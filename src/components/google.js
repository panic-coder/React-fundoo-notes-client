import React from 'react';
// import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
// import { GoogleLogout } from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}
 
export default class GoogleComponent extends React.Component {
render() {
    return (
  <GoogleLogin
    clientId="550726260998-js1kv4otb2f0h2b2j1sp9qpjiv4iovs0.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />
    )
//   document.getElementById('googleButton')



//   <GoogleLogout
//     buttonText="Logout"
//     onLogoutSuccess={logout}>
//   </GoogleLogout>
}
}