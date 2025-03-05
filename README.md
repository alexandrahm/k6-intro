# K6 Load Testing Repository

## 📋 Overview
This repository contains load testing examples and exercises using k6, an open-source load testing tool for developers and QA engineers.

## 🚀 Prerequisites
- Node.js (14+ recommended)
- npm or yarn
- k6 installed ([Official Installation Guide](https://k6.io/docs/get-started/installation/))

## 💻 Installation

### Install k6
```bash
# macOS (Homebrew)
brew install k6

# Windows (Chocolatey)
choco install k6

# Linux
sudo gpg -k
sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3D2D6AE1BCC5A42D3B4B5A3D6FE25

echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
sudo apt update
sudo apt install k6
```

## 🧪 Basic K6 Test Types

### 1. Smoke Test
- Validates basic functionality
- Minimal load
- Quick verification of system response
```bash
k6 run basic-tests/smoke-test.js
```

### 2. Load Test
- Typical user load
- Validate system performance
```bash
k6 run basic-tests/load-test.js
```

### 3. Stress Test
- Beyond normal operational capacity
- Determine system breaking point
```bash
k6 run basic-tests/stress-test.js
```

## 🔍 Running Tests

### Basic Execution
```bash
# Run a specific test
k6 run [script-path]

# Run with more virtual users
k6 run -u 10 [script-path]

# Set test duration
k6 run -d 30s [script-path]
```

## 📊 Key Metrics to Monitor
- Requests per second
- Response time
- Error rate
- HTTP request duration

## 📚 Learning Resources
- [K6 Official Documentation](https://k6.io/docs/)
- [Performance Testing Guide](https://loadninja.com/blog/performance-testing-guide/)
- [K6 GitHub Repository](https://github.com/grafana/k6)

## 🐛 Troubleshooting
- Ensure k6 is correctly installed
- Check script syntax
- Verify network connectivity
- Use `--verbose` flag for detailed output

## 💡 Disclaimer
These tests are for educational purposes. Always get permission before load testing production systems.
```

## Performance Testing Best Practices
- Start with low load
- Gradually increase virtual users
- Monitor system resources
- Use realistic scenarios
- Validate results across multiple runs

## Example K6 Test Template
```javascript
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  const res = http.get('https://test.k6.io');
  check(res, { 'status was 200': (r) => r.status === 200 });
  sleep(1);
}
```
