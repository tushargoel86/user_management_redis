import React from "react";

import { Button } from "react-bootstrap";

import { useDispatch } from 'react-redux';
import { deleteUser } from '../../../actions/userAction'

const DeleteData = (props) => {

  //this hook allows us to access the dispatch function
  const dispatch = useDispatch();

  //here we watch for the loading prop in the redux store. every time it gets updated, our component will reflect it
  //const message = useSelector((state) => state.user);

  const handleClick = (e, id) => {
    e.preventDefault();
     dispatch(deleteUser(id));
  };

  return (   
      <Button className="justify-content-center" onClick={(e) => handleClick(e, props.id)}>Delete</Button>
  );
};

export default DeleteData;
