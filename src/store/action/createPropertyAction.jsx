import {server} from '../store/';
import axios from 'axios';

axios.defaults.withCredentials = true;

export const createProperty = (property) => async (dispatch) => {
    try {
        dispatch({ type: "CREATE_PROPERTY_REQUEST" });
        const { data } = await axios.post(`${server}/api/createProperty`, property);
        dispatch({ type: "CREATE_PROPERTY_SUCCESS", payload: data });
    } catch (error) {
        dispatch({
            type: "CREATE_PROPERTY_FAIL",
            payload: error.response.data.message,
        });
    }
}

export const clearErrorCreateProperty = () => async (dispatch) => {
    dispatch({ type: "CLEAR_ERROR_CREATE_PROPERTY" });
}

export const updateProperty = (property , id) => async (dispatch) => {
    try {

        dispatch({ type: "UPDATE_PROPERTY_REQUEST" });
        const { data } = await axios.put(`${server}/api/updateProperty/${id}`, property);
        dispatch({ type: "UPDATE_PROPERTY_SUCCESS", payload: data });
    } catch (error) {
        dispatch({
            type: "UPDATE_PROPERTY_FAIL",
            payload: error.response.data.message,
        });
    }
}

export const clearErrorUpdateProperty = () => async (dispatch) => {
    dispatch({ type: "CLEAR_ERROR_UPDATE_PROPERTY" });
}