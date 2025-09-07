import { createAction, createReducer } from "@reduxjs/toolkit";

const LOGIN_REQUEST =  createAction("LOGIN_REQUEST");
const LOGIN_SUCCESS = createAction("LOGIN_SUCCESS");
const LOGIN_FAIL = createAction("LOGIN_FAIL");
const LOGOUT_REQUEST = createAction("LOGOUT_REQUEST");
const LOGOUT_SUCCESS = createAction("LOGOUT_SUCCESS");
const LOGOUT_FAIL = createAction("LOGOUT_FAIL");
const LOAD_REQUEST = createAction("LOAD_REQUEST");
const LOAD_SUCCESS = createAction("LOAD_SUCCESS");
const LOAD_FAIL = createAction("LOAD_FAIL");
const REGSISTER_REQUEST = createAction("REGSISTER_REQUEST");
const REGSISTER_SUCCESS = createAction("REGSISTER_SUCCESS");
const REGSISTER_FAIL = createAction("REGSISTER_FAIL");
const CLEAR_ERROR_USER = createAction("CLEAR_ERROR_USER");


export const loginReducer = createReducer(
  { user: [], isAuthenticated: false ,message:"",loading:false},(builder) => {
    builder
    .addCase(LOGIN_REQUEST, (state, action) => {
      state.loading = true;
    })
    .addCase(LOGIN_SUCCESS, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.message = action.payload.message;
    })
    .addCase(LOGIN_FAIL, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase(CLEAR_ERROR_USER, (state, action) => {
      state.error = null;
      state.message = "";
    })
    .addCase(LOGOUT_REQUEST, (state, action) => {
      state.loading = true;
    })
    .addCase(LOGOUT_SUCCESS, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.message = action.payload.message;
      state.user = action.payload;
    })
    .addCase(LOGOUT_FAIL, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(LOAD_REQUEST, (state, action) => {
      state.loading = true;
    })
    .addCase(LOAD_SUCCESS, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.message = action.payload.message;
      state.user = action.payload.data;
      state.role = action.payload.data.role;
    })
    .addCase(LOAD_FAIL, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
      state.user = null;
    })
    .addCase(REGSISTER_REQUEST, (state, action) => {
      state.loading = true;
    })
    .addCase(REGSISTER_SUCCESS, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = action.payload;
      state.message = action.payload.message;
    })
    .addCase(REGSISTER_FAIL, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    });
  }
);
