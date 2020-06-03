import React from "react";

import { Navbar, Nav } from "react-bootstrap";
import { Route, Switch, Link } from "react-router-dom";

import Home from "../Home";
import AddUser from "../user/addUser/AddUser";

const navbar = (props) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="mb-5">
        <Navbar.Brand as={Link} to="/">
          Redis user management
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} exact="true" to="/home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} exact="true" to="/addUser">
            Add User
          </Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/addUser" component={AddUser}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </div>
  );
};

export default navbar;
