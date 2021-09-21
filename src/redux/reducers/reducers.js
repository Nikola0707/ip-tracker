// Import Constants
import {
  REQUEST_USERDATA_PENDING,
  REQUEST_USERDATA_SUCCESS,
  REQUEST_USERDATA_FAILED,
} from "../constants/constants";

//   Initial State
const initialState = {
  userData: [],
  status: "loading",
  error: null,
};

export const requestUserData = (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_USERDATA_PENDING:
      return { ...state, status: "loading" };
    case REQUEST_USERDATA_SUCCESS:
      return { ...state, userData: action.payload, status: "succeeded" };
    case REQUEST_USERDATA_FAILED:
      return { ...state, error: action.payload, status: "failed" };
    default:
      return state;
  }
};
