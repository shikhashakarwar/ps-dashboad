import { REGION_FETCHER_ACTIONS } from "../actions/regionFetcherActions";

const intaialState = {
  data: [],
  selectedRegion: null,
  servicesBasedOnRegion: []
};

const RegionDataReducer = (state = intaialState, action) => {
  switch (action.type) {
    case REGION_FETCHER_ACTIONS.REGION_DATA_SUCCESS: {
      console.log(action);
      
      return {
        ...state,
        data: action.payload
      };
    }
    case REGION_FETCHER_ACTIONS.REGION_DATA_ERROR: {
      return {
        ...state
      };
    }
    case REGION_FETCHER_ACTIONS.UPATE_REGION: {
      return {...state,
        selectedRegion: action.payload
      }
    }
    case REGION_FETCHER_ACTIONS.REGION_SERVICES_DATA_SUCCESS: {
      return {...state,
        servicesBasedOnRegion: action.payload
      }
    }
    default:
      return state;
  }
};

export default RegionDataReducer;
