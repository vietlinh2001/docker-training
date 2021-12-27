(async function connect() {

const { Client } = require('pg')
const client = new Client({ user: 'postgres', password: 'root', host: 'db' })
await client.connect()
const res = await client.query('SELECT $1 as message', ['Hello world!'])
console.log(res.rows[0].message) // Hello world!
await client.end();

})().catch(err => console.error(err));
