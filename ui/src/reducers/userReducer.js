import {
  ADD_USER,
  SEARCH_USER,
  DELETE_USER,
  ERROR_DATA,
} from "../actions/types";

const initialState = {
  message: "",
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SEARCH_USER:
      return {
        ...state,
        user: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        message: action.payload.message,
      };

    case ERROR_DATA:
      return {
        ...state,
        message: "User not found",
      };
    default:
      return state;
  }
}
