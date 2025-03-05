import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 10,  // 10 concurrent users
    duration: '3m',  // Test for 3 minutes
    thresholds: {
        http_req_duration: ['max<2000'],  // Maximum request duration
        http_req_failed: ['rate<0.01'],   // Error rate threshold
        iterations: ['rate>0'],           // Track iteration rate
    },
};

export default function () {
    const response = http.get('https://test.k6.io/');
    sleep(1);  // 1 second pause between iterations
}