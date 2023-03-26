import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import EventCards from "./EventCards.js";
import { Client, Databases, Query } from "appwrite";


function EventDetails() {
    const params = useParams();
    const [documents, setDocuments] = useState(null);

    useEffect(() => {
        const client = new Client();
        const database =  new Databases(client);
        client.setEndpoint('http://localhost/v1')
            .setProject('641e1d5958bb7476598f')
        database.listDocuments(
            "641fbe39e2686af5a6d4",
            "641fbe4437f32ea3565f",
            [
              Query.equal('type', params.category)
            ]
          ).then((res) => {
            setDocuments(res.documents)
            console.log(documents)
          }).catch((err) => {
            console.log(err)
          })
    }, [])

  return (
    <>
        { documents ?
            <Container fluid className="event-sec" style={{height: window.innerHeight}}>
            <div className="event-head"> 
                <h1 className="event-heading" style={{ color: "#FBABAA" ,position: "absolute", left: "100", marginTop:"60px", width: "400px"}}>
                <strong className="purple">{params.category.toUpperCase()}</strong>
                </h1>
            </div>
            <Container>
                <div className="cards" style={{paddingTop: "150px"}}>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    { documents.map((doc) => {
                        return <Col md={4} className="event-card" 
                        >
                            <EventCards
                                title={doc.name}
                            />
                        </Col>
                    })}
                </Row>
                </div>
            </Container>
        </Container>
         :
        <></>
        }
    </>
  );
}

export default EventDetails;
