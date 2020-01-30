import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { DASHBOARD_BASE_PATH, LOGIN_PATH } from '../../constants/paths';

import Login from '../../components/Login/login';
import DashboardContainer from '../../components/Dashboard/DashboardContainer'

class AuthenticationLayer extends React.Component{
  componentDidMount() {
    let item = JSON.parse(localStorage.getItem('key'));
    var currTime = new Date().getTime();    
    if(!item || item.expTime < currTime) {
      localStorage.removeItem('key');
      this.props.history.push(LOGIN_PATH);
    }
  }

  render() { 
    return (
      <Switch>
        <Route exact path={LOGIN_PATH} component={Login}/>      
        <Route path={DASHBOARD_BASE_PATH} component={DashboardContainer} /> 
        <Redirect from='/' to={LOGIN_PATH} />        
      </Switch>        
    );
  } 
}  
 
export default AuthenticationLayer;
