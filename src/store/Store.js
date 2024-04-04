import React from "react";
import redux, { createStore } from "redux";

import thunkMiddleware from "redux-thunk";
const applyMiddleware = redux.applyMiddleware;
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
const NUMBER_REQUEST_ITEM = "NUMBER_REQUEST_ITEM";
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};
const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};
const initialState = {};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return { ...state, numPhone: state.numPhone - 1 };

    default:
      return state;
  }
};
const store = createStore(reducer);
export default store;
