import React, { Component } from 'react';
import {  MDBCol, MDBRow, MDBInput, MDBBtn } from 'mdbreact';


class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.username  + this.state.age);
    
    event.preventDefault();
  }
  


render() {
  return (
      <>
      <MDBRow>
        <MDBCol md="3">
          <h1>Hello {this.state.username} {this.state.age}</h1>
        </MDBCol>
        <MDBCol md="6">
          <form onSubmit={this.handleSubmit}>
            <p className="h5 text-center mb-4">Sign in</p>
            <div className="grey-text">
              <MDBInput
                label="Type your email"
                icon="envelope"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                name="username"
                onChange={this.myChangeHandler}
              />
              <MDBInput
                label="Type your password"
                icon="lock"
                group
                type="password"
                name="age"
                validate
                onChange={this.myChangeHandler}
              />
            </div>
            <div className="text-center">
              <MDBBtn type="submit">Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
        <MDBCol md="3">
        </MDBCol>
      </MDBRow>
      </>
    )
  }
}
export default NameForm;