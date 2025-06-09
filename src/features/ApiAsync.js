import axios from "axios";

const initialState = {
  loading: false,
  data: [],
  error: ''
};

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'


export function fetchUsersRequest () {
  return {
    type: FETCH_USERS_REQUEST
  }
}
export function fetchUsersSuccess (users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}
export function fetchUsersFailure (error) {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}



export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_REQUEST':
      return { ...state, loading: true };

    case 'FETCH_USERS_SUCCESS':
      return { loading: false, data: action.payload, error: '' };

    case 'FETCH_USERS_FAILURE':
      return { loading: false, data: [], error: action.payload };

    default:
      return state;
  }
};


export const fetchUser = () => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest());
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      dispatch(fetchUsersSuccess(response.data));
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };
}

