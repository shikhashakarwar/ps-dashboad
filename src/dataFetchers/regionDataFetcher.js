import axios from "axios";
import { REGION_FETCHER_ACTIONS } from "../actions/regionFetcherActions";

const RegionDataFetcher = {
    fetchData: function (options) {
        return dispatch => {
            let data = {
                "requestId":"abc",
                "payload" :[
                    {
                        "region" : "us-east-1a",
                        "alias" : "prod-na",
                        "payload" : [
                            {
                                "package" : "aggregationservices",
                                "machines" : [
                                        {
                                            "ip" : "10.0.1.14",
                                            "environment": "prod-na",
                                            "version" : "3.1.1655",
                                            "status" : 0,    //0 means running, 1 means stopped, 2 means terminated
                                            "instanceId" : "i-025a063cff043fb76",
                                            "instanceType" : "m4.large",
                                        }
                                ]
                            }
                        ]
                    },
                    {
                        "region" : "eu-east-1a",
                        "alias" : "prod-eu",
                        "payload" : [
                            {
                                "package" : "aggregationservices",
                                "machines" : [
                                        {
                                            "ip" : "103.0.1.27",
                                            "environment": "prod-na",
                                            "version" : "3.1.1655",
                                            "status" : 0,    //0 means running, 1 means stopped, 2 means terminated
                                            "instanceId" : "i-025a063cff043fb76",
                                            "instanceType" : "m4.large",
                                        }
                                ]
                            }
                        ]
                    },
                    {
                        "region" : "jp-east-1a",
                        "alias" : "prod-jp",
                        "payload" : [
                            {
                                "package" : "aggregationservices",
                                "machines" : [
                                        {
                                            "ip" : "103.0.1.46",
                                            "environment": "prod-na",
                                            "version" : "3.1.1655",
                                            "status" : 0,    //0 means running, 1 means stopped, 2 means terminated
                                            "instanceId" : "i-025a063cff043fb76",
                                            "instanceType" : "m4.large",
                                        }
                                ]
                            }
                        ]
                    }
                ]
            }
            dispatch({   
                type: REGION_FETCHER_ACTIONS.REGION_DATA_SUCCESS,
                payload: data.payload
            });
            // axios.get('abcd').then(response => {
            //     dispatch({   
            //         // type: REGION_FETCHER_ACTIONS.REGION_DATA_SUCCESS,
            //         // payload: response.data.payload
            //     });
            // }).catch(error => {
            //     dispatch({
            //         type: REGION_FETCHER_ACTIONS.REGION_DATA_ERROR,
            //         payload: data
            //     });
            // });
        };
    },
    updateRegion: function(options) {
        return dispatch => {
            dispatch({
                type: REGION_FETCHER_ACTIONS.UPATE_REGION, payload: options.region
            });
        }
    },
    fetchServicesBasedOnRegion: function (options) {
        return dispatch => {
            // axios.get({}).then((data)=> {
                
            //     dispatch({
            //         type: "",
            //         payload: data.payload
            //     });
            // }, (error) => {
            //     dispatch({
            //         type: "",
            //         payload: error
            //     });
            // });
            const data = {
                "payload" :[{
                  "region" : "us-east-1",
                  "alias" : "prod-na",
                  "payload" : [
                  {
                    "Name" : "AggregationReadyUsers-prod-na",
                    "Service" : "Aggrigation",
                    "URL" : "https://sqs.us-east-1.amazonaws.com/857283459404/AggregationReadyUsers-prod-na",
                    "Queue Type" : "Standard",
                    "Messages Available" : "1,076,939",
                    "Messages in Flight" : "1,687",
                    "Messages Delayed" : "0",
                    "Created" : "2015-10-06 19:39:54 GMT+05:30",
                    "Last Updated" : "2019-11-15 02:12:24 GMT+05:30"
                  },
                  {
                    "Name" : "GBUserDataIngestion-prod-na",
                    "Service" : "IngesterJobs",
                    "URL" : "https://sqs.us-east-1.amazonaws.com/857283459404/GBUserDataIngestion-prod-na",
                    "Queue Type" : "Standard",
                    "Messages Available" : "0",
                    "Messages in Flight" : "57",
                    "Messages Delayed" : "0",
                    "Created" : "2016-03-17 14:52:49 GMT+05:30",
                    "Last Updated" : "2020-01-20 00:11:34 GMT+05:30"
                  },
                  {
                    "Name" : "GbTempDataReadyEvent-prod-na",
                    "Service" : "GBDisagg",
                    "URL" : "https://sqs.us-east-1.amazonaws.com/857283459404/GbTempDataReadyEvent-prod-na",
                    "Queue Type" : "Standard",
                    "Messages Available" : "0",
                    "Messages in Flight" : "0",
                    "Messages Delayed" : "0",
                    "Created" : "2016-02-15 10:17:05 GMT+05:30",
                    "Last Updated" : "2019-11-18 11:23:23 GMT+05:30"
                  },
                  {
                    "Name" : "GbTempDataReadyEventPyAmi-prod-na",
                    "Service" : "Pyami-disagg",
                    "URL" : "https://sqs.us-east-1.amazonaws.com/857283459404/GbTempDataReadyEventPyAmi-prod-na",
                    "Queue Type" : "Standard",
                    "Messages Available" : "1,953,324",
                    "Messages in Flight" : "70",
                    "Messages Delayed" : "0",
                    "Created" : "2019-05-22 13:55:39 GMT+05:30",
                    "Last Updated" : "2019-07-03 17:25:44 GMT+05:30"
                  },
                  {
                    "Name" : "GBIngestionCompletionEvent-prod-na",
                    "Service" : "IngesterClient",
                    "URL" : "https://sqs.us-east-1.amazonaws.com/857283459404/GBIngestionCompletionEvent-prod-na",
                    "Queue Type" : "Standard",
                    "Messages Available" : "0",
                    "Messages in Flight" : "0",
                    "Messages Delayed" : "0",
                    "Created" : "2017-04-13 12:28:02 GMT+05:30",
                    "Last Updated" : "2019-12-14 23:16:50 GMT+05:30"
                  }
                  ]}
                ]};
            
                return dispatch({
                    type: REGION_FETCHER_ACTIONS.REGION_SERVICES_DATA_SUCCESS,
                    payload: data.payload.payload
                });
        };
    }
};

export default RegionDataFetcher;
