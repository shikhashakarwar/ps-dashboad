import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { DASHBOARD_BASE_PATH, LOGIN_PATH } from '../../constants/paths';

import Login from '../../components/Login/login';
import DashboardContainer from '../../components/Dashboard/DashboardContainer'

class AuthenticationLayer extends React.Component{
  componentDidMount() {
    const url = this.props.location.pathname;
    let authToken = JSON.parse(localStorage.getItem('authToken'));
    if(!authToken) {
      this.props.history.push(LOGIN_PATH);
    } else if(url.indexOf("login") > 0) {
      this.props.history.push(DASHBOARD_BASE_PATH);
    } else {
      this.props.history.push(url);
    }
  }

  render() { 
    return (
      <Switch>
        <Route path={LOGIN_PATH} component={Login}/>      
        <Route path={DASHBOARD_BASE_PATH} component={DashboardContainer} /> 
        <Route exact path={DASHBOARD_BASE_PATH + "/:region"} component={DashboardContainer} /> 
        <Redirect from='/' to={LOGIN_PATH} />        
      </Switch>        
    );
  } 
}  
 
export default AuthenticationLayer;
