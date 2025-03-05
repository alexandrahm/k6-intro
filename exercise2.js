import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    scenarios: {
        login_test: {
            executor: 'ramping-vus',
            startVUs: 0,
            stages: [
                { duration: '1m', target: 100 },  // Ramp up to 100 users
                { duration: '3m', target: 100 },  // Stay at 100 users
                { duration: '1m', target: 0 },    // Ramp down to 0
            ],
        },
    },
    thresholds: {
        http_req_duration: ['p95<2000'],  // 95% of requests should be below 2s
        http_req_failed: ['rate<0.01'],   // Less than 1% error rate
    },
};

export default function () {
    const loginRes = http.post('https://test.k6.io/login.php', {
        username: 'admin',
        password: '123',
    });

    check(loginRes, {
        'login successful': (r) => r.status === 200 && r.body.includes('successfully authenticated'),
    });

    sleep(2);  // Wait 2 seconds before next iteration
}