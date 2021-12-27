const http = require('http');

const server = http.createServer((request, response) => {

    response.writeHead(200, {
        'content-type': 'text/plain',
    });

    response.end('Hello World');
});


server.listen(3000, () => {
    console.log('Server started at port 3000');
});

