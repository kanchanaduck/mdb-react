import React, { Component } from 'react';

import {  MDBCard, MDBCardTitle, MDBCardText  } from 'mdbreact';

class Background extends Component{
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("/api/hello2")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } 
    else if (!isLoaded) {
      return <div>Loading...</div>;
    } 
    else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              <img src={"/img/fruit/" + item.img} alt="" width="50"/>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default Background;