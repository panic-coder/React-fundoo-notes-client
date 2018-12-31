import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Input, Avatar } from '@material-ui/core';
// import ReactDOM from 'react-dom';
// import GoogleLogin from 'react-google-login';


var cardStyle = {
    display: 'block',
    width: '30vw',
    float:'none',
    margin:' 0 auto',
    transitionDuration: '0.3s',
    // height: '45vw'
}

var avatar = {
    backgroundColor: 'red[500]',
    float:'none',
    margin:' 0 auto',
  }

export default class LoginComponent extends React.Component {
    
    render() {
        return (
            <Card style={cardStyle}>
             <Avatar aria-label="Recipe" style={avatar}>
              S
            </Avatar>
            <CardContent >
                <div className="loginInput">
                <div >
                <Input htmlFor="component-simple" style={{ width: '100%', height: '100%' }}  placeholder="Email">Name</Input>
                </div>
                <div >
                <Input htmlFor="component-simple" style={{ width: '100%', height: '100%' }} placeholder="Password">Password</Input>        
                </div>
                </div>
            </CardContent>
            <CardActions>
              <Button size="small">Login</Button>
              <Button size="small">Register</Button>
            </CardActions>
          </Card>
        )
    }
}

// SimpleCard.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };

//   export default withStyles(styles)(SimpleCard);

