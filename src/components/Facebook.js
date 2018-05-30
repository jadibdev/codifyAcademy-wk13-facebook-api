import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login'

export default class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }

    responseFacebook = response => {
        //console.log(response);
        this.setState({
          isLoggedIn: true,
          userID: response.userID,
          name: response.name,
          email: response.email,
          picture: response.picture.data.url
        });
    };
    componentClicked = () => console.log("clicked");

  render() {
      let fbContent;

      if (this.state.isLoggedIn) {
        fbContent = (
          <div>
            <img src={this.state.picture} alt={this.state.name}/>
            <h4>{this.state.name}</h4>
            <h6>{this.state.email}</h6>
          </div>
        );
      } else {
        fbContent = (<FacebookLogin
            appId="1822975357997319"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook} />);
      }
    return (
      <div>
        {fbContent}
      </div>
    )
  }
}
