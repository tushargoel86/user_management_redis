import { ADD_USER, DELETE_USER, SEARCH_USER, ERROR_DATA } from "./types";
import { USER_URL } from "../Constant";

export function addUser(user, history) {
  console.log('user', user);
  
  return function (dispatch) {
    fetch(USER_URL, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "sec-fetch-mode": "no-cors",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then(res => {
          alert(res.message);
          history.push("/");
      })
      .catch(alert);
  };
}

export function searchUser(user) {
  return function (dispatch) {
    fetch(USER_URL + user, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "sec-fetch-mode": "no-cors",
      },
    })
      .then((res) => {
        if (res.status === 204)
          return dispatch({
            type: ERROR_DATA,
            payload: "",
          });
        return res.json();
      })
      .then((res) => {
        return dispatch({
          type: SEARCH_USER,
          payload: res,
        });
      })
      .catch(alert);
  };
}

export function deleteUser(user) {
  return function (dispatch) {
    fetch(USER_URL + user, {
      method: "DELETE",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "sec-fetch-mode": "no-cors",
      },
    })
      .then((res) => {
        if (res.status === 204)
          return dispatch({
            type: ERROR_DATA,
            payload: "",
          });
        return res.json();
      })
      .then((res) => {
        return dispatch({
          type: DELETE_USER,
          payload: res,
        });
      })
      .catch(alert);
  };
}
