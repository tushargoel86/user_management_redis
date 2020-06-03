import React from "react";

import { Row, Col, Button } from "react-bootstrap";
import DeleteData from "../delete/DeleteData";

const DisplayUser = (props) => {
  var user = <div></div>;
  if (props.data)
    user = (
      <div>
        <Row className="justify-content-center">
          <Col md={4}>
            <h3>UserId: {props.data.id}</h3>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4}>
            <ul>
              <li>Name: {props.data.name}</li>
              <li>Email: {props.data.email}</li>
              <li>Phone: {props.data.phone}</li>
            </ul>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={2}>
            <Button onClick={() => props.goBack()} >GoBack</Button>
          </Col>
          <Col md={2}>
            <DeleteData id={props.data.id} updateData={props.updateData} />
          </Col>
        </Row>
      </div>
    );

  return user;
};

export default DisplayUser;
