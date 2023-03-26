import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EventCards from "./EventCards.js";
import pic from "../../Assets/events/pic1.jpg";
import pic2 from "../../Assets/events/pic2.jpg";
import pic3 from "../../Assets/events/pic3.jpg";
import pic4 from "../../Assets/events/pic4.jpg";
import pic5 from "../../Assets/events/pic5.jpg";
import pic6 from "../../Assets/events/pic6.jpg";
// import { redirect } from "react-router-dom";

function Events() {
  
  const handleClick = (category) => {
    window.location.replace("/needs/" +category)
  }

  return (
    <Container fluid className="event-sec">
      <div className="event-head"> 
        <h1 className="event-heading" style={{ color: "#FBABAA" ,position: "absolute", left: "100", marginTop:"60px", width: "400px"}}>
          <strong className="purple">Event Needs</strong>
        </h1>
      </div>
      <Container>
         <div className="cards" style={{paddingTop: "150px"}}>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="event-card" 
              onClick={() => handleClick('venue')}
            >
              <EventCards
                imgPath={pic}
                title="Venue"
              />
              
            </Col>

            <Col md={4} className="event-card"
              onClick={() => handleClick('catering')}
            >
              <EventCards
                imgPath={pic2}
                title="Catering"
              />
            </Col>

            <Col md={4} className="event-card"
              onClick={() => handleClick('decor')}
            >
              <EventCards
                imgPath={pic3}
                title="Decor"
              />
            </Col>

            <Col md={4} className="event-card"
              onClick={() => handleClick('dj')}
            >
              <EventCards
                imgPath={pic4}
                title="DJ"
              />
            </Col>

            <Col md={4} className="event-card"
              onClick={() => handleClick('photography')}
            >
              <EventCards
                imgPath={pic5}
                title="Photography"
              />
            </Col>

            <Col md={4} className="event-card"
              onClick={() => handleClick('others')}
            >
              <EventCards
                imgPath={pic6}
                title="Others"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
}

export default Events;
