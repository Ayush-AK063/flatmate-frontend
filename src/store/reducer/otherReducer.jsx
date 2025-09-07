import { createAction , createReducer } from "@reduxjs/toolkit";

const GET_ALL_STATE_CITY_REQUEST = createAction("GET_ALL_STATE_CITY_REQUEST");
const GET_ALL_STATE_CITY_SUCCESS = createAction("GET_ALL_STATE_CITY_SUCCESS");
const GET_ALL_STATE_CITY_FAIL = createAction("GET_ALL_STATE_CITY_FAIL");

const GET_ALL_FEEDBACK_REQUEST = createAction("GET_ALL_FEEDBACK_REQUEST");
const GET_ALL_FEEDBACK_SUCCESS = createAction("GET_ALL_FEEDBACK_SUCCESS");
const GET_ALL_FEEDBACK_FAIL = createAction("GET_ALL_FEEDBACK_FAIL");
const GET_ALL_FEEDBACK_RESET = createAction("GET_ALL_FEEDBACK_RESET");

const GET_ALL_CONTACT_REQUEST = createAction("GET_ALL_CONTACT_REQUEST");
const GET_ALL_CONTACT_SUCCESS = createAction("GET_ALL_CONTACT_SUCCESS");
const GET_ALL_CONTACT_FAIL = createAction("GET_ALL_CONTACT_FAIL");
const GET_ALL_CONTACT_RESET = createAction("GET_ALL_CONTACT_RESET");

export const otherReducer = createReducer(
    { statesCity: [], message:"", loading: false, error: null },
    (builder) => {
        builder
        .addCase(GET_ALL_STATE_CITY_REQUEST, (state, action) => {
            state.loading = true;
        })
        .addCase(GET_ALL_STATE_CITY_SUCCESS, (state, action) => {
            state.loading = false;
            state.statesCity = action.payload.data;
            state.message = action.payload.message;
        })
        .addCase(GET_ALL_STATE_CITY_FAIL, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.message = action.payload.message;
        });
    }
    );

export const feedbackReducer = createReducer(
    { feedback: [], message:"", loading: false, error: null },
    (builder) => {
        builder
        .addCase(GET_ALL_FEEDBACK_REQUEST, (state, action) => {
            state.loading = true;
        })
        .addCase(GET_ALL_FEEDBACK_SUCCESS, (state, action) => {
            state.loading = false;
            state.feedback = action.payload.data;
            state.message = action.payload.message;
        })
        .addCase(GET_ALL_FEEDBACK_FAIL, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.message = action.payload.message;
        })
        .addCase(GET_ALL_FEEDBACK_RESET, (state, action) => {
            state.feedback = [];
            state.message = "";
        });
    }
    );

export const contactReducer = createReducer(
    { contact: [], message:"", loading: false, error: null },
    (builder) => {
        builder
        .addCase(GET_ALL_CONTACT_REQUEST, (state, action) => {
            state.loading = true;
        })
        .addCase(GET_ALL_CONTACT_SUCCESS, (state, action) => {
            state.loading = false;
            state.contact = action.payload.data;
            state.message = action.payload.message;
        })
        .addCase(GET_ALL_CONTACT_FAIL, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.message = action.payload.message;
        })
        .addCase(GET_ALL_CONTACT_RESET, (state, action) => {
            state.contact = [];
            state.message = "";
        });
    }
    );