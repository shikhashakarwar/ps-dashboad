import axios from 'axios';

export function userAuthentication(loginData){
    // axios.get("abcd").then(
    //     (response) => {
    //         console.log("inresponse");      
    //     },
    //     (error) => {
    //         console.log("error");  
    //     }
    // )
    
    if(loginData.email === 'raj@gmail.com' && loginData.password === '1234') {
        let item = Object.assign({exp: 60*1000, currTime: new Date().getTime()});
        item.expTime = new Date(item.currTime + item.exp).getTime();
        localStorage.setItem('key', JSON.stringify(item));
        return true;
    } else {
        return false;
    }
}
