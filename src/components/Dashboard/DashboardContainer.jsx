import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Router } from "react-router-dom";
import RegionDataFetcher from "../../dataFetchers/regionDataFetcher";
import DasboardRightPanel from "../Dashboard/DasboardRightPanel/DasboardRightPanel";
import DashboardLeftPanel from "../Dashboard/DasboardLeftPanel/DasboardLeftPanel";
import { Constants } from "../../configs/constants";
import { CssBaseline } from "@material-ui/core";


import "./DashboardContainer.scss";
class DashboardContainer extends React.Component{
  
  constructor() {
    super();
    this.state = {
      regions: [
        {text: "na", value: Constants.REGIONS.NA},
        {text: "eu", value: Constants.REGIONS.EU},
        {text: "jp", value: Constants.REGIONS.JP}
      ],
      menuItems: ["Daemons","Services", "Client"],
      regionDataToDisplay: null,
      selectedMenu: null
    }

    this.updateRegion = this.updateRegion.bind(this);
    this.updateMenuItem = this.updateMenuItem.bind(this);
  }
  
  componentDidMount() {
    const params = this.props.match.params;
    this.props.fetchData();
    const region = Object.keys(params).length ? params.region : Constants.REGIONS.NA;
    this.updateRegion(region);
  }

  componentDidUpdate(prevProps, nextProps) {
    
    if(prevProps.selectedRegion !== this.props.selectedRegion) {
      let regionDataToDisplay = null;
      const regionsData = this.props.regionData;
      for (let i = 0; i < regionsData.length; i++) {
        if(this.props.selectedRegion == regionsData[i].alias) {
          regionDataToDisplay = regionsData[i];
          break;
        }
      }
      this.setState(() => {
        return {
          regionDataToDisplay: regionDataToDisplay
        }
      });
    }
  }

  updateRegion(value) {
    this.props.updateRegion({region: value});
    this.props.fetchServices({region: value});
    this.props.history.push("/dashboard/" + value);
  }

  updateMenuItem(value) {
    this.setState(() => {
      return {
        selectedMenu: value
      }
    });
  }

  render() {   
    return( 
      <> 
        <div><CssBaseline/></div>
        <DashboardLeftPanel regions={this.state.regions} updateRegion={this.updateRegion} selectedRegion={this.props.selectedRegion} menuItems={this.state.menuItems} updateMenuItem={this.updateMenuItem} selectedMenu={this.state.selectedMenu}> </DashboardLeftPanel>
        <main>
          <DasboardRightPanel regionsData={this.state.regionDataToDisplay}></DasboardRightPanel>
        </main>
      </>    
    )
  }
}

const mapStateToProps = state => {
  return {
    regionData: state.regionData.data,
    selectedRegion: state.regionData.selectedRegion,
    servicesBasedonRegions: state.regionData.servicesBasedOnRegion
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(RegionDataFetcher.fetchData()),
    updateRegion: (options) => dispatch(RegionDataFetcher.updateRegion(options)),
    fetchServices: (options) => dispatch(RegionDataFetcher.fetchServicesBasedOnRegion(options))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(DashboardContainer);