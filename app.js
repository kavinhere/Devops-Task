const http = require('http');

const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Kavin App</title>
    <style>
        body {
            margin: 0;
            height: 100vh;
            background: black;
            color: #00ffcc;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Arial, sans-serif;
        }
        h1 {
            font-size: 3rem;
            text-shadow: 0 0 20px #00ffcc;
        }
    </style>
</head>
<body>
    <h1>Hello from Kavin</h1>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
});

server.listen(5000, '0.0.0.0', () => {
    console.log("Server running on port 5000");
});
