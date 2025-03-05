import http from 'k6/http'; 

export default function (){ 
    const response = http.get('https://catfact.ninja/fact'); 
    console.log(response.body); 
}