import axios from "axios";
import { GET_CAR_BY_ID_FAILURE, GET_CAR_BY_ID_REQUEST, GET_CAR_BY_ID_SUCCESS } from "./carActionType";


const getCarByIdRequest = (payload) => {
    return {
        type: GET_CAR_BY_ID_REQUEST,
        payload
    }
}

const getCarByIdSuccess = (payload) => {
    return {
        type: GET_CAR_BY_ID_SUCCESS,
        payload
    }
}

const getCarByIdFailure = (payload) => {
    return {
        type: GET_CAR_BY_ID_FAILURE,
        payload
    }
}

export const getCarById = (payload) => (dispatch) => {
    dispatch(getCarByIdRequest);
    axios.get(`http://localhost:4000/cars/${payload}`).then(res => {
        dispatch(getCarByIdSuccess(res.data.car))
    }).catch(err => {
        dispatch(getCarByIdFailure(err))
    })
}