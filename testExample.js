import http from 'k6/http';
import { check } from 'k6';

export const options = {
    stages: [
        // Ramp-up: Simulate morning start when employees begin work
        { duration: '2m', target: 10 }, // First half of employees
        { duration: '2m', target: 20 }, // All employees online
        // Steady state: Normal working hours
        { duration: '5m', target: 20 },
        // Peak time: Additional requests during market volatility
        { duration: '2m', target: 30 },
        // Return to normal
        { duration: '2m', target: 20 },
        // End of day wind down
        { duration: '1m', target: 0 },
    ],
    
    thresholds: {
        http_req_duration: ['p(95)<500'], // 95% of requests should be under 500ms
        http_req_failed: ['rate<0.01'],  // Less than 1% error rate
    }
};

export default function () {
    const response = http.get('https://catfact.ninja/breeds', {
    });

    check(response, {
        'GET status is 200': (r) => r.status === 200,
    });
}