import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getUni = () => (dispatch) => {
    dispatch(fetchStart());
    axios.get(`http://universities.hipolabs.com/search?country=United+States`)
        .then(resp => {
            dispatch(fetchSuccess(resp.data[Math.floor(Math.random()* resp.data.length)]));
        })
        .catch(err => {
            dispatch(fetchFail(err));
        })
}

export const fetchStart = () => {
    return({type:FETCH_START});
}

export const fetchSuccess = (universities) => {
    return({type:FETCH_SUCCESS, payload: universities});
}

export const fetchFail = (errorMessage) => {
    return({type:FETCH_FAIL, payload: errorMessage});
}