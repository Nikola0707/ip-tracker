// Import Constants
import {
  REQUEST_USERDATA_PENDING,
  REQUEST_USERDATA_SUCCESS,
  REQUEST_USERDATA_FAILED,
} from "../constants/constants";

// Actions

export const requestUserDataPending = () => {
  return {
    type: REQUEST_USERDATA_PENDING,
  };
};
export const requestUserDataSuccess = (userData) => {
  return {
    type: REQUEST_USERDATA_SUCCESS,
    payload: userData,
  };
};

export const requestUserDataFailed = (error) => {
  return {
    type: REQUEST_USERDATA_FAILED,
    payload: error,
  };
};
