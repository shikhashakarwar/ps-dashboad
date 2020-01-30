import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory'

import configureStore from './layout/appStore';
import DashboardLayout from './layout/Dashboard/DashboardLayout'
import './App.scss';

const history = createHistory()

export default class App extends React.Component { 
  render() { 
    return (
      <Router history={history}>
        <Switch>
          <Provider store={configureStore('Dashboard')}>
            <div className="App"> 
              <DashboardLayout />
            </div>
          </Provider>
        </Switch>  
      </Router>  
    );
  }
}
