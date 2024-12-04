import React from 'react';
import { Route } from 'react-router-dom';

import AuthenticationLayer from './AuthenticationLayer';

class DashboardLayout extends React.Component {
  render(){
    return (
      <Route component={AuthenticationLayer}/>
    );
  }
}

export default DashboardLayout;
