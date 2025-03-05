import http from 'k6/http'; 
import {check} from 'k6'; 

export default function (){ 
    //creating body from request, added "stringify" to convert to JSON string, since this is a JS object and endpoint expects JSON
    const body = JSON.stringify({//this object will contain properties from body
        username: "student",
        password: "Password123"
    })
    // Define request parameters
    const params = {
        headers: {
            'Content-Type': 'application/json' // Content-Type header tells the server we're sending JSON data
        }
    }
    //post expects: URL, body and params
    const response = http.post('https://practicetestautomation.com/practice-test-login/', body, params); 
    check(response,{
        'status is 200': (resp) => resp.status === 200
    })
}