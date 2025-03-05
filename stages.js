import http from 'k6/http';

export const options = {
    stages: [
        { duration: '20s', target: 10 }, // 0 to 10 during 20 s
        { duration: '10s', target: 0 }, // 10 to 0 during 10 s
    ],
    thresholds: {
        http_req_duration: ['p(95)<500'],
        http_req_failed: ['rate<0.01']
    }
};

export default function () {
  http.get('https://test.k6.io/contacts.php');
}
