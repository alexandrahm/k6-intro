import http from 'k6/http'; 
import {check} from 'k6'; 

export default function (){ 
    const response = http.get('http://test.k6.io'); 
    check(response, { //check is a function, first value is data that we want to have access to, second is an object with different checks
        'status is 200': (resp) => resp.status === 200,
        //name of the property : (access to first value) => condition === expected value
        //You will recive:  ✓ status is 200
        'page is startpage': (resp)  => resp.body.includes( 'Collection of simple web-pages suitable for load testing.' )
        //"includes" is a method that verify if body contains the expected text
    });
}