import React from 'react';
import { BrowserRouter as Router, useParams, Link, Route, Switch, useRouteMatch } from "react-router-dom";
import {Card, CardContent, Typography} from '@material-ui/core';
import './DashboardTable.scss'; 

export default function DashboardTable(props){
  let { url } = useRouteMatch();

  return(
    <Router>
      <div className="dashboard-table">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Region</th>
              <th scope="col">Alias</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="col"><Link to={`${url}/${props.userData[0].region}`}>{props.userData[0].region}</Link></th>
              <th scope="col"><Link to={`${url}/${props.userData[0].alias}`}>{props.userData[0].alias}</Link></th>        
            </tr>
          </tbody>
        </table> 

        <Card>
          <CardContent>
            <Typography> package : {props.userData[0].payload[0].package} </Typography>
            <Typography> ip : {props.userData[0].payload[0].machines[0].ip} </Typography>
            <Typography> environment : {props.userData[0].payload[0].machines[0].environment} </Typography>
            <Typography> version : {props.userData[0].payload[0].machines[0].version} </Typography>
          </CardContent>
        </Card>

        <Switch>
          <Route path={`${url}/:serverPath`} component={Test}/>
        </Switch>

      </div>
    </Router>
  )
}

const Test = () =>  {
  let { serverPath } = useParams();
  return (
    <h4>{serverPath}</h4>
  );
} 
