const express = require('express');
const app = express();


const PORT = process.env.PORT || 5000 || nconf.get;

app.use( '/lease', require( './routes/lease.js' ) );
app.listen( 5000, () => console.log( `App Started On ${PORT}`));