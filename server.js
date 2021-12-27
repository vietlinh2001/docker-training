const http = require('http');

const query = async () => {

const { Client } = require('pg');
const client = new Client({ user: 'postgres', password: 'root', host: 'db' });
await client.connect();
const res = await client.query('SELECT $1 as message', ['Hello world!']);

await client.end();

return res.rows[0];

}

const server = http.createServer((request, response) => {

    query().then((result) => {
         response.writeHead(200, {
             'content-type': 'application/json',
         });

         response.end(JSON.stringify(result));
    });
});


server.listen(3000, () => {
    console.log('Server started at port 3000');
});

