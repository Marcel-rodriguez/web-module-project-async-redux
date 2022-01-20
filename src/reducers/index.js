import { FETCH_START, FETCH_FAIL, FETCH_SUCCESS} from './../actions';

const initialState = {
    universities: {
      name: ''
  },
  isFetching: false,
  error: ''
}
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_START:
        return {
          ...state,
          universities: {},
          isFetching: true,
          error: ''
        };
      case FETCH_FAIL:
        return {
          ...state,
          universities:{},
          isFetching: false,
          error: action.payload
        };
      case FETCH_SUCCESS:
        return {
          ...state,
          universities: action.payload,
          isFetching: false,
          error: ''
        };
      default:
        return state;
    }
  };