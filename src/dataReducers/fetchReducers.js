import { combineReducers } from 'redux';
import RegionDataReducer from './RegionDataReducer';

const allReducers = combineReducers({
  regionData: RegionDataReducer,
})

function getDashboardReducers() {
  return allReducers;
}

export default function getAllReducers(appName){
  switch (appName) {
    case "Dashboard":
        return getDashboardReducers();
      break;
    default:
      return;
  }
}
