import { createAction , createReducer } from "@reduxjs/toolkit";

const CREATE_PROPERTY_REQUEST = createAction("CREATE_PROPERTY_REQUEST");
const CREATE_PROPERTY_SUCCESS = createAction("CREATE_PROPERTY_SUCCESS");
const CREATE_PROPERTY_FAIL = createAction("CREATE_PROPERTY_FAIL");
const CLEAR_ERROR_CREATE_PROPERTY = createAction("CLEAR_ERROR_CREATE_PROPERTY");

const UPDATE_PROPERTY_REQUEST = createAction("UPDATE_PROPERTY_REQUEST");
const UPDATE_PROPERTY_SUCCESS = createAction("UPDATE_PROPERTY_SUCCESS");
const UPDATE_PROPERTY_FAIL = createAction("UPDATE_PROPERTY_FAIL");
const CLEAR_ERROR_UPDATE_PROPERTY = createAction("CLEAR_ERROR_UPDATE_PROPERTY");

export const createPropertyReducer = createReducer(
    { property: {}, message:"", loading: false, error: null },
    (builder) => {
        builder
        .addCase(CREATE_PROPERTY_REQUEST, (state, action) => {
            state.loading = true;
        })
        .addCase(CREATE_PROPERTY_SUCCESS, (state, action) => {
            state.loading = false;
            state.property = action.payload;
            state.message = action.payload.message;
        })
        .addCase(CREATE_PROPERTY_FAIL, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.message = action.payload.message;
        })
        .addCase(CLEAR_ERROR_CREATE_PROPERTY, (state, action) => {
            state.error = null;
            state.message = "";
            state.property = {};
        });
    }
    );

export const updatePropertyReducer = createReducer(
    { property: {}, message:"", loading: false, error: null },
    (builder) => {
        builder
        .addCase(UPDATE_PROPERTY_REQUEST, (state, action) => {
            state.loading = true;
        })
        .addCase(UPDATE_PROPERTY_SUCCESS, (state, action) => {
            state.loading = false;
            state.property = action.payload;
            state.message = action.payload.message;
        })
        .addCase(UPDATE_PROPERTY_FAIL, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.message = action.payload.message;
        })
        .addCase(CLEAR_ERROR_UPDATE_PROPERTY, (state, action) => {
            state.error = null;
            state.message = "";
            state.property = {};
        });
    }
    );