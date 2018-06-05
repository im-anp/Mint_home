import React from 'react';
import {Col, Row} from 'react-materialize';
import Witem from './workshopItem';


const Workshop = () =>{
    return(
        <div className="workshop_section">
            <h1>Featured Workshop</h1>
            <div>
                <Row>
                    <Col m={2} s={12}></Col>
                    <Col m={4} s={12}>
                        <Witem image={require("../image/racing.png")} title="Off Roading" link="this is link" />
                    </Col>
                    <Col m={4} s={12}>
                        <Witem image={require("../image/poker.png")} title="Poker" link="this is link" />
                    </Col>
                    <Col m={2} s={12}></Col>
                </Row>
                <Row>
                    <Col m={2} s={12}></Col>
                    <Col m={4} s={12}>
                        <Witem image={require("../image/comedy.png")} title="Comedy" link="this is link" />
                    </Col>
                    <Col m={4} s={12}>
                        <Witem image={require("../image/racing.png")} title="Racing" link="this is link" />
                    </Col>
                    <Col m={2} s={12}></Col>
                </Row>
            </div>

        </div>
    )

}

export default Workshop;