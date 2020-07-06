import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import Book from "./Book";

// core components

function BookGalery() {
    return (
        <>
            <div >
                <Book />
                <Book />
                <Book />
                <Book />
            </div>
        </>
    );
}

export default BookGalery;
