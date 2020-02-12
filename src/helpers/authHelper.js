import { bidgelyStorage } from "./storageHelper";

export const AuthHelper = {
    authToken: null,
    
    setToken: function (token) {
        bidgelyStorage.setItem("authToken", token);
        this.authToken = token;
    },
    getAuthToken: function () {
        let token = "Bearer ";
        if(this.authToken) {
            token += this.authToken;
        } else {
            token += bidgelyStorage.getItem("authToken");
        }   
        return token;
    }
};
