import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homimage from "../../Assets/hom.jpg";
import EvCards from "./EventList.js";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ paddingLeft:"15px" ,textAlign:"justify", fontSize: "5em",color: "#FF5F1F", paddingBottom: "20px" }}>
                <strong  className="purple" style={{color:"#FBABAA"}}>Eventopia</strong>
                 
            </h1>
            <p>Your one stop destination for event planning.....</p>
           </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={homimage} alt="about" className="img-fluid"  />
          </Col>
          
        </Row>
        
      </Container>
      
     
      <Container>
       
         <div className="cards" style={{paddingTop: "150px"}}>
        <Row style={{ justifyContent: "center", marginTop: "-150px",paddingBottom: "10px" }}>
          <h1 className="e-head" style={{fontSize:"3em",color: "#FBABAA", paddingBottom: "30px"}}>Select type of event
          
          </h1>
          
          <Col md={4} className="event-card">
            <EvCards
            
              title="Hackathons"
            />
             
          </Col>

          <Col md={4} className="event-card">
            <EvCards
             
             title="Weddings"
              
            />
             
          </Col>

          <Col md={4} className="event-card">
            <EvCards
           
              title="Conference"
             />
             
          </Col>
          <Col md={4} className="event-card">
            <EvCards
              
              title="Birthday Party"
             />
             
          </Col>
          <Col md={4} className="event-card">
            <EvCards
             
              title="Cultural festival"
             />
             
          </Col>
          <Col md={4} className="event-card">
            <EvCards
           
               title="Seminars"
             />
             
          </Col>
        </Row>
        </div>
      </Container>     
         


    </Container>
   
  );
  
}

export default About;
