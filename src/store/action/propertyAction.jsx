import {server} from '../store/';
import axios from 'axios';

axios.defaults.withCredentials = true;

export const searchProperty = (searchData) => async (dispatch) => {
    try {
        dispatch({ type: "GET_SEARCH_PROPERTY_REQUEST" });
        const {city , state , type, page ,area} = searchData;
        const { data } = await axios.get(`${server}/api/searchProperty?city=${city}&state=${state}&type=${type}&page=${page}&area=${area}`);
        dispatch({ type: "GET_SEARCH_PROPERTY_SUCCESS", payload: data });
    } catch (error) {
        dispatch({
            type: "GET_SEARCH_PROPERTY_FAIL",
            payload: error.response.data.message,
        });
    }
}

export const clearErrorSearch = () => async (dispatch) => {
    dispatch({
      type: "CLEAR_ERROR_SEARCH_PROPERTY",
    });
  };

// featured Property

export const featuredProperty = () => async (dispatch) => {
    try {
        dispatch({ type: "GET_FEATURED_PROPERTY_REQUEST" });
        const { data } = await axios.get(`${server}/api/property/featured`);
        dispatch({ type: "GET_FEATURED_PROPERTY_SUCCESS", payload: data });
    } catch (error) {
        dispatch({
            type: "GET_FEATURED_PROPERTY_FAIL",
            payload: error.response.data.message,
        });
    }
}

export const clearErrorFeaturedProperty = () => async (dispatch) => {
    dispatch({
      type: "CLEAR_ERROR_FEATURED_PROPERTY",
    });
  }

export const orderHistory = () => async (dispatch) => {
    try {
        dispatch({ type: "GET_ORDER_HISTORY_REQUEST" });
        const { data } = await axios.get(`${server}/api/getBooking`);
        dispatch({ type: "GET_ORDER_HISTORY_SUCCESS", payload: data });
    } catch (error) {
        dispatch({
            type: "GET_ORDER_HISTORY_FAIL",
            payload: error.response.data.message,
        });
    }
}
export const clearErrorOrderHistory = () => async (dispatch) => {
    dispatch({
      type: "CLEAR_ERROR_ORDER_HISTORY",
    });
  }
  
  export const appointmentHistory = () => async (dispatch) => {
    try {
        dispatch({ type: "GET_APPOINTMENT_HISTORY_REQUEST" });
        const { data } = await axios.get(`${server}/api/getAppointments`);
        dispatch({ type: "GET_APPOINTMENT_HISTORY_SUCCESS", payload: data });
    } catch (error) {
        dispatch({
            type: "GET_APPOINTMENT_HISTORY_FAIL",
            payload: error.response.data.message,
        });
    }
}
export const clearErrorAppointmentHistory = () => async (dispatch) => {
    dispatch({
      type: "CLEAR_ERROR_APPOINTMENT_HISTORY",
    });
  }
  
export const getSingleProperty = (id) => async (dispatch) => {
    try {
        dispatch({ type: "GET_SINGLE_PROPERTY_REQUEST" });
        const { data } = await axios.get(`${server}/api/getProperty/${id}`);
        dispatch({ type: "GET_SINGLE_PROPERTY_SUCCESS", payload: data });
    } catch (error) {
        dispatch({
            type: "GET_SINGLE_PROPERTY_FAIL",
            payload: error.response.data.message,
        });
    }
}

export const clearErrorSingleProperty = () => async (dispatch) => {
    dispatch({
      type: "CLEAR_ERROR_SINGLE_PROPERTY",
    });
  }


export const getallOrderhistory = () => async (dispatch) => {
    try {
        dispatch({ type: "GET_ALL_ORDER_REQUEST" });
        const { data } = await axios.get(`${server}/api/getAllOrders`);
        dispatch({ type: "GET_ALL_ORDER_SUCCESS", payload: data });
    } catch (error) {
        dispatch({
            type: "GET_ALL_ORDER_FAIL",
            payload: error.response.data.message,
        });
    }
}

export const clearErrorAllOrderHistory = () => async (dispatch) => {
    dispatch({
      type: "CLEAR_ERROR_ALL_ORDER",
    });
  }


export const getCategorizedProperty = (category) => async (dispatch) => {
    try {
        dispatch({ type: "GET_CATEGORY_PROPERTY_REQUEST" });
        const { data } = await axios.get(`${server}/api/getAllCategory/${category}`);
        dispatch({ type: "GET_CATEGORY_PROPERTY_SUCCESS", payload: data });
    } catch (error) {
        dispatch({
            type: "GET_CATEGORY_PROPERTY_FAIL",
            payload: error.response.data.message,
        });
    }
}

export const clearErrorCategorizedProperty = () => async (dispatch) => {
    dispatch({
      type: "CLEAR_ERROR_CATEGORY_PROPERTY",
    });
  }