import http from 'k6/http'; //library that allow us to use http

export default function (){ //function that will contain our code
    const response = http.get('http://test.k6.io'); //variable where we provide URL for the method call
    console.log(response.status); //In order to know the status returned after execute response
}