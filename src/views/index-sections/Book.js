import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Book() {
    return (
        <>
            <div>
                <Container>
                    <Row>
                        <Col sm="2">
                            <div >
                                <img
                                    className="rounded "
                                    alt="..."
                                    src={require("assets/img/SAMcover.jpg")}
                                ></img>
                            </div>
                        </Col>
                        <Col>
                            <p>Title: Sufficiently Advanced Magic </p>
                            <p>Author: Andrew Row </p>
                            <p>Tags: Strong Magic, Monsters</p>
                        </Col>

                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Book;
