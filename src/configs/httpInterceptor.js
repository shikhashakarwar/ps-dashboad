import axios from "axios";
import {AuthHelper} from "../helpers/authHelper";

axios.interceptors.request.use(function (config) {
    config.headers.common["Authorization"] = AuthHelper.getAuthToken();
    console.log(config);
    
    return config;
});

axios.interceptors.response.use(function (response) {
    console.log(response);  
}, function (error) {
    console.log(error);
    return Promise.reject(error);
});