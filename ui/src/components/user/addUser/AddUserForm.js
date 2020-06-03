import React from "react";

import { Container, Card, Form, Button } from "react-bootstrap";

const UserForm = (props) => {

  return (
    <Container style={{ width: "30%" }}>
      <Card>
        <Card.Body>
          <Form onSubmit={props.handleSubmit}>
            <Form.Group>
              <Form.Label>User Id:</Form.Label>
              <Form.Control
                type="text"
                name="id"
                onChange={(e) => props.setId(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={(e) => props.setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={(e) => props.setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone No:</Form.Label>
              <Form.Control
                type="number"
                name="phone"
                onChange={(e) => props.setPhone(e.target.value)}
                required
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserForm;
