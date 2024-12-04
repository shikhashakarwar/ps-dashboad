import axios from 'axios';
import { bidgelyStorage } from "../helpers/storageHelper";
import { AuthHelper } from "../helpers/authHelper";

export function userAuthentication(loginData){
    // axios.get("abcd").then(
    //     (response) => {
    //         console.log("inresponse");      
    //     },
    //     (error) => {
    //         console.log("error");  
    //     }
    // )
    
    return new Promise( (resolve, reject) => {
        if(loginData.email === 'shikha@bidgely.com' && loginData.password === '1234') {
            setTimeout(() => {
                bidgelyStorage.setItem("userData", loginData);
                AuthHelper.setToken("12321");
                return resolve(true);
            });
        } else {
            return reject(false);
        }
    })
}
