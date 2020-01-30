import { combineReducers } from 'redux';
import serverDataReducer from './serverDataReducer';

const allReducers = combineReducers({
  server: serverDataReducer,
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
