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
          <br/>
          {props.location ? `Location: ${props.location}`: ""}
          <br/>
          {props.contact ? `Contact: +91${props.contact}`: ""}
        </Card.Text>
        
        {"\n"}
        {"\n"}

       
      </Card.Body>
    </Card>
  );
}
export default EventCards;
