import React from "react";

import { Form, Card, Button, Col, Container, Toast } from "react-bootstrap";

const SearchUI = (props) => {
  return (
    <Container>
      <Card border="light" className="justify-content-center">
        <Card.Body>
          <Form onSubmit={props.handleSubmit}>
            <Form.Row>
              <Col md="2"></Col>
              <Col md="5">
                <Form.Control name="user" value={props.user} onChange={props.handleUser} />
              </Col>
              <Col md="5">
                <Button type="submit">Search</Button>
              </Col>
              <Col md="1"></Col>
            </Form.Row>
            <Form.Row>
              <Col md="2"></Col>
              <Col md="4">
                {props.errorMessage && (
                  <Toast delay={3000} autohide="true">
                    <Toast.Body>{props.errorMessage}</Toast.Body>
                  </Toast>
                )}
              </Col>
            </Form.Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SearchUI;
