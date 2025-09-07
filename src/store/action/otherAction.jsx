import {server} from '../store/';
import axios from 'axios';

axios.defaults.withCredentials = true;

export const getAllStateCity = () => async (dispatch) => {
    try {
        dispatch({ type: "GET_ALL_STATE_CITY_REQUEST" });
        const { data } = await axios.get(`${server}/api/getAllStateCity`);
        dispatch({ type: "GET_ALL_STATE_CITY_SUCCESS", payload: data });
    } catch (error) {
        dispatch({
            type: "GET_ALL_STATE_CITY_FAIL",
            payload: error.response.data.message,
        });
    }
}

export const getAllFeedback = () => async (dispatch) => {
    try {
        dispatch({ type: "GET_ALL_FEEDBACK_REQUEST" });
        const { data } = await axios.get(`${server}/api/getAllFeedback`);
        dispatch({ type: "GET_ALL_FEEDBACK_SUCCESS", payload: data });
    } catch (error) {
        dispatch({
            type: "GET_ALL_FEEDBACK_FAIL",
            payload: error.response.data.message,
        });
    }
}

export const getAllContact = () => async (dispatch) => {
    try {
        dispatch({ type: "GET_ALL_CONTACT_REQUEST" });
        const { data } = await axios.get(`${server}/api/getMessages`);
        dispatch({ type: "GET_ALL_CONTACT_SUCCESS", payload: data });
    } catch (error) {
        dispatch({
            type: "GET_ALL_CONTACT_FAIL",
            payload: error.response.data.message,
        });
    }
}


