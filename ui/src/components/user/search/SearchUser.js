import React, { useEffect } from "react";
import { useState, Alert } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import SearchUI from "./SearchUI";
import DisplayUser from "../display/DisplayUser";

import { searchUser } from "../../../actions/userAction";

const SearchUser = (props) => {
  const [user, setUser] = useState("");
  const [setUserData] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  //this hook allows us to access the dispatch function
  const dispatch = useDispatch();
  //here we watch for the loading prop in the redux store. every time it gets updated, our component will reflect it
  const fetchUser = useSelector((state) => state.user);

  useEffect(() => {
    fetchUser.message = "";
    fetchUser.user = "";
  });
  
  const handleUser = (e) => {
    setUser(e.target.value);
  };

  const updateData = () => {
    setSuccessMessage("user deleted successfully");
    setUserData([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   // setUserData([]);
    dispatch(searchUser(user));
  };

  const alertMessage = () => {
    if (successMessage)
      return (
        <div>
          <Alert variant="success">
            <div className="d-flex justify-content-center">
              {successMessage}
            </div>
          </Alert>
        </div>
      );
    else return <div></div>;
  };

  const handleGoBack = () => {
    setUser("");
    props.history.push("/");
  };

  return (
    <React.Fragment>
      <Container fluid className="mt-5">
        <SearchUI
          errorMessage={fetchUser.message}
          handleSubmit={handleSubmit}
          handleUser={handleUser}
          user={user}
        />
        <br />
        {fetchUser.user.data && (
          <DisplayUser
            goBack={handleGoBack}
            data={fetchUser.user.data}
            updateData={updateData}
          />
        )}
        {alertMessage}
      </Container>
    </React.Fragment>
  );
};

export default SearchUser;
