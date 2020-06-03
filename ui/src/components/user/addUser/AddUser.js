import React, { useState } from "react";

import AddUserForm from "./AddUserForm";

import { useDispatch } from "react-redux";
import { addUser } from "../../../actions/userAction";

const AddUser = (props) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  //this hook allows us to access the dispatch function
  const dispatch = useDispatch();
  //here we watch for the loading prop in the redux store. every time it gets updated, our component will reflect it
 // const user = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ id, name, email, phone }, props.history));
  };

  return (
    <div>
      <AddUserForm
        setId={setId}
        setName={setName}
        setEmail={setEmail}
        setPhone={setPhone}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddUser;
