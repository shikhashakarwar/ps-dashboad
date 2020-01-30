import React from 'react';
import { connect } from 'react-redux';
import ServerDataFetcher from "../../dataFetchers/serverDataFetcher";
import DashboardTable from './DashbardTable/DashboardTable';
import DashboardHeader from './DashboardHeader/DashboardHeader'

class DashboardContainer extends React.Component{
  componentDidMount() {
    this.props.fetchData();
  }

  render(){   
    return( 
      <> 
        <DashboardHeader/>
        {(this.props.server.data) ? <DashboardTable userData={this.props.server.data.payload} /> : ""  } 
      </>    
    )
  }
}

const mapStateToProps = state => {
  return {
    server: state.server,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(ServerDataFetcher.fetchData()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(DashboardContainer);