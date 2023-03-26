import React from "react";
import Card from "react-bootstrap/Card";


function EventCards(props) {
  return (
    <Card className="event-card-view" style={{cursor: "pointer"}}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        {"\n"}
        {"\n"}

       
      </Card.Body>
    </Card>
  );
}
export default EventCards;
