import { SERVER_FETCHER_ACTIONS } from "../actions/serverFetcherActions";

const serverDataReducer = (state = {data: null}, action) => {
  switch (action.type) {
    case SERVER_FETCHER_ACTIONS.SERVER_DATA_ERROR: {
      return {
        ...state,
        data: action.payload
      };
    }
    case SERVER_FETCHER_ACTIONS.SERVER_DATA_SUCCESS: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default serverDataReducer;
