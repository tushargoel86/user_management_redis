import React from "react";

import SearchUser from './user/search/SearchUser';

const home = (props) => {
  return (
    <SearchUser history={props.history} />
  );
};

export default home;
