import React from "react";
import Card from "react-bootstrap/Card";


function evCards(props) {
  console.log(props.imgPath)
  return (
    <Card className="  event-cardv" style={{}}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description2}
        </Card.Text>
  
        
        
      </Card.Body>
    </Card>
  );
}
export default evCards;