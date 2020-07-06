import React from "react";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
    Button,
    Label,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
} from "reactstrap";
import ExploreInterface from "./ExplorInterface";
import Book from "./Book";
import BookGalery from "./BookGalery";

// core components

function Explore() {
    const [leftFocus, setLeftFocus] = React.useState(false);
    const [rightFocus, setRightFocus] = React.useState(false);
    React.useEffect(() => {
        if (
            !document
                .getElementById("sliderRegular")
                .classList.contains("noUi-target")
        ) {
            Slider.create(document.getElementById("sliderRegular"), {
                start: [50],
                connect: [true, false],
                step: 0.5,
                range: { min: 0, max: 100 },
            });
        }
        if (
            !document.getElementById("sliderDouble").classList.contains("noUi-target")
        ) {
            Slider.create(document.getElementById("sliderDouble"), {
                start: [20, 80],
                connect: [false, true, false],
                step: 1,
                range: { min: 0, max: 100 },
            });
        }
    });
    return (
        <>
            <div className="section section-basic bg-white " id="basic-elements">
                <Container>
                    <div className="row">
                    <div className="col-6">
                        <ExploreInterface />
                    </div>
                    <div className="col-6">

                        <div className="space-50"></div>

                        <p className="category">Pick your Filter</p>
                        <Button color="default">Default</Button>
                        <Button color="default">Default</Button>
                        <Button color="default">Default</Button>
                        <Button color="default">Default</Button>
                        <Button color="default">Default</Button>
                        <Button color="default">Default</Button>
                        <Button color="default">Default</Button>
                        <Button color="default">Default</Button>
                        <Button color="default">Default</Button>
                        <Button color="default">Default</Button>
                    </div>

                    </div>

                    <BookGalery />
                </Container>
            </div>
        </>
    );
}

export default Explore;
