import axios from "axios";
import { SERVER_FETCHER_ACTIONS } from "../actions/serverFetcherActions";

const ServerDataFetcher = {
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
                            },
                            {
                            }
                        ]
                    },
                    {
                    }
                ]
            }
            axios.get('abcd').then(response => {
                dispatch({   
                    // type: SERVER_FETCHER_ACTIONS.SERVER_DATA_SUCCESS,
                    // payload: response.data.payload
                });
            }).catch(error => {
                dispatch({
                    type: SERVER_FETCHER_ACTIONS.SERVER_DATA_ERROR,
                    payload: data
                });
            });
        };
    },
};

export default ServerDataFetcher;
