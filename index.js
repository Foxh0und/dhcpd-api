const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();


app.use( '/lease', require( './routes/lease.js' ) );
app.listen( 5000, () => console.log( `App Started On ${PORT}`));