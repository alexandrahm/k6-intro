import http from 'k6/http'; 
import {check, sleep} from 'k6'; 

export const options = { //define options variable
    vus: 10, //configured 10 virtual users
    duration: '10s', //duration of 10 seconds
    thresholds:{//criteria
        http_req_duration: ['p(95)<100'], //95% of all requests must complete in less than 100 milliseconds
        http_req_failed: ['rate<0.01'] // No more than 1% of requests are allowed to fail
    }
}

export default function (){ 
    const response = http.get('http://test.k6.io'); 
    check(response, {
        'status is 200': (resp) => resp.status === 200,
        'page is startpage': (resp)  => resp.body.includes( 'Collection of simple web-pages suitable for load testing.' )
    });
    sleep(2) //Sleep 2 seconds per execution
}