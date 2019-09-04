import React from 'react';

import {  MDBRow, MDBCol, MDBCard, MDBCardTitle, MDBCardText  } from 'mdbreact';

function shoot() {
  alert("Great Shot!");
}
const Person =  ({name}) => {
  
  const numb = Math.floor(Math.random() * 10) + 1;
  const url = `https://randomuser.me/api/portraits/women/${numb}.jpg`
  const text = `https://api.adviceslip.com/advice/${numb}`
  // const text2 = text.slip.advice
  return (
    <>
    <MDBCol size="4">
      <MDBCard className="card-body" onClick={shoot}>
        <MDBCardTitle>{name}</MDBCardTitle>
        <MDBCardText>
          <img src={url} alt=""></img>
          {text}
        </MDBCardText>
      </MDBCard>
    </MDBCol>
    </>
  )
}

const APIPage =  () => {
  var rows = [];
  for (var i = 0; i < 11; i++) {
    rows.push(<Person key={i} name="MINT" />);
  }
  return (
    <>
    {rows}
    </>
  )
}

export default APIPage;