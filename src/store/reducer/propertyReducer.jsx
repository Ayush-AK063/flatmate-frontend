import { createAction , createReducer } from "@reduxjs/toolkit";

const GET_SEARCH_PROPERTY_REQUEST = createAction("GET_SEARCH_PROPERTY_REQUEST");
const GET_SEARCH_PROPERTY_SUCCESS = createAction("GET_SEARCH_PROPERTY_SUCCESS");
const GET_SEARCH_PROPERTY_FAIL = createAction("GET_SEARCH_PROPERTY_FAIL");
const CLEAR_ERROR_SEARCH_PROPERTY = createAction("CLEAR_ERROR_SEARCH_PROPERTY");


const GET_FEATURED_PROPERTY_REQUEST = createAction("GET_FEATURED_PROPERTY");
const GET_FEATURED_PROPERTY_SUCCESS = createAction("GET_FEATURED_PROPERTY_SUCCESS");
const GET_FEATURED_PROPERTY_FAIL = createAction("GET_FEATURED_PROPERTY_FAIL");
const CLEAR_ERROR_FEATURED_PROPERTY = createAction("CLEAR_ERROR_FEATURED_PROPERTY");

const GET_CATEGORY_PROPERTY_REQUEST = createAction("GET_CATEGORY_PROPERTY_REQUEST");
const GET_CATEGORY_PROPERTY_SUCCESS = createAction("GET_CATEGORY_PROPERTY_SUCCESS");
const GET_CATEGORY_PROPERTY_FAIL = createAction("GET_CATEGORY_PROPERTY_FAIL");
const CLEAR_ERROR_CATEGORY_PROPERTY = createAction("CLEAR_ERROR_CATEGORY_PROPERTY");

const GET_ORDER_HISTORY_REQUEST = createAction("GET_ORDER_HISTORY_REQUEST");
const GET_ORDER_HISTORY_SUCCESS = createAction("GET_ORDER_HISTORY_SUCCESS");
const GET_ORDER_HISTORY_FAIL = createAction("GET_ORDER_HISTORY_FAIL");
const CLEAR_ERROR_ORDER_HISTORY = createAction("CLEAR_ERROR_ORDER_HISTORY");

const GET_APPOINTMENT_HISTORY_REQUEST = createAction("GET_APPOINTMENT_HISTORY_REQUEST");
const GET_APPOINTMENT_HISTORY_SUCCESS = createAction("GET_APPOINTMENT_HISTORY_SUCCESS");
const GET_APPOINTMENT_HISTORY_FAIL = createAction("GET_APPOINTMENT_HISTORY_FAIL");
const CLEAR_ERROR_APPOINTMENT_HISTORY = createAction("CLEAR_ERROR_APPOINTMENT_HISTORY");

const GET_SINGLE_PROPERTY_REQUEST = createAction("GET_SINGLE_PROPERTY_REQUEST");
const GET_SINGLE_PROPERTY_SUCCESS = createAction("GET_SINGLE_PROPERTY_SUCCESS");
const GET_SINGLE_PROPERTY_FAIL = createAction("GET_SINGLE_PROPERTY_FAIL");
const CLEAR_ERROR_SINGLE_PROPERTY = createAction("CLEAR_ERROR_SINGLE_PROPERTY");


const GET_ALL_ORDER_REQUEST = createAction("GET_ALL_ORDER_REQUEST");
const GET_ALL_ORDER_SUCCESS = createAction("GET_ALL_ORDER_SUCCESS");
const GET_ALL_ORDER_FAIL = createAction("GET_ALL_ORDER_FAIL");
const CLEAR_ERROR_ALL_ORDER = createAction("CLEAR_ERROR_ALL_ORDER");


export const featuredPropertyReducer = createReducer(
    { properties: [], message:"", loading: false, error: null },
    (builder) => {
        builder
        .addCase(GET_FEATURED_PROPERTY_REQUEST, (state, action) => {
            state.loading = true;
        })
        .addCase(GET_FEATURED_PROPERTY_SUCCESS, (state, action) => {
            state.loading = false;
            state.properties = action.payload.data;
            state.message = action.payload.message;
        })
        .addCase(GET_FEATURED_PROPERTY_FAIL, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.message = action.payload.message;
        })
        .addCase(CLEAR_ERROR_FEATURED_PROPERTY, (state, action) => {
            state.error = null;
            state.message = "";
            state.properties = [];
        });
    }
    );

export const propertyReducer = createReducer(
    { properties: [], message:"", loading: false, error: null },
    (builder) => {
        builder
        .addCase(GET_SEARCH_PROPERTY_REQUEST, (state, action) => {
            state.loading = true;
        })
        .addCase(GET_SEARCH_PROPERTY_SUCCESS, (state, action) => {
            state.loading = false;
            state.properties = action.payload.data;
            state.message = action.payload.message;
        })
        .addCase(GET_SEARCH_PROPERTY_FAIL, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.message = action.payload.message;
        })
        .addCase(CLEAR_ERROR_SEARCH_PROPERTY, (state, action) => {
            state.error = null;
            state.message = "";
            state.properties = [];
        });
    }
    );

export const orderHistoryReducer = createReducer(
    { orders: [], message:"", loading: false, error: null },
    (builder) => {
        builder  
        .addCase(GET_ORDER_HISTORY_REQUEST, (state, action) => {
            state.loading = true;
        })
        .addCase(GET_ORDER_HISTORY_SUCCESS, (state, action) => {
            state.loading = false;
            state.orders = action.payload.properties;
            state.message = action.payload.message;
        })
        .addCase(GET_ORDER_HISTORY_FAIL, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.message = action.payload.message;
        })
        .addCase(CLEAR_ERROR_ORDER_HISTORY, (state, action) => {
            state.error = null;
            state.message = "";
            state.orders = [];
        });
    }
    );

    export const appointmentHistoryReducer = createReducer(
        { appointments: [], message:"", loading: false, error: null },
        (builder) => {
            builder  
            .addCase(GET_APPOINTMENT_HISTORY_REQUEST, (state, action) => {
                state.loading = true;
            })
            .addCase(GET_APPOINTMENT_HISTORY_SUCCESS, (state, action) => {
                state.loading = false;
                state.appointments = action.payload.properties;
                state.message = action.payload.message;
            })
            .addCase(GET_APPOINTMENT_HISTORY_FAIL, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.message = action.payload.message;
            })
            .addCase(CLEAR_ERROR_APPOINTMENT_HISTORY, (state, action) => {
                state.error = null;
                state.message = "";
                state.appointments = [];
            });
        }
        );

export const singlePropertyReducer = createReducer(
    { property: {}, message:"", loading: false, error: null },
    (builder) => {
        builder
        .addCase(GET_SINGLE_PROPERTY_REQUEST, (state, action) => {
            state.loading = true;
        })
        .addCase(GET_SINGLE_PROPERTY_SUCCESS, (state, action) => {
            state.loading = false;
            state.property = action.payload.data;
            state.message = action.payload.message;
        })
        .addCase(GET_SINGLE_PROPERTY_FAIL, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.message = action.payload.message;
        })
        .addCase(CLEAR_ERROR_SINGLE_PROPERTY, (state, action) => {
            state.error = null;
            state.message = "";
            state.property = {};
        });
    }
    );
    
export const allOrderReducer = createReducer(
    { orderHistory: [], message:"", loading: false, error: null },
    (builder) => {
        builder
        .addCase(GET_ALL_ORDER_REQUEST, (state, action) => {
            state.loading = true;
        })
        .addCase(GET_ALL_ORDER_SUCCESS, (state, action) => {
            state.loading = false;
            state.orderHistory = action.payload.data;
            state.message = action.payload.message;
        })
        .addCase(GET_ALL_ORDER_FAIL, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.message = action.payload.message;
        })
        .addCase(CLEAR_ERROR_ALL_ORDER, (state, action) => {
            state.error = null;
            state.message = "";
        });
    }
    );

export const categoryPropertyReducer = createReducer(
    { properties: [], message:"", loading: false, error: null },
    (builder) => {
        builder
        .addCase(GET_CATEGORY_PROPERTY_REQUEST, (state, action) => {
            state.loading = true;
        })
        .addCase(GET_CATEGORY_PROPERTY_SUCCESS, (state, action) => {
            state.loading = false;
            state.properties = action.payload.data;
            state.message = action.payload.message;
        })
        .addCase(GET_CATEGORY_PROPERTY_FAIL, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.message = action.payload.message;
        })
        .addCase(CLEAR_ERROR_CATEGORY_PROPERTY, (state, action) => {
            state.error = null;
            state.message = "";
            state.properties = [];
        });
    }
    );