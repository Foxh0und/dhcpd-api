const express = require( 'express' );
const router = express.Router();

router.get( '', (request, response ) => {
    response.status( 400 ).json( {msg: 'Test'});
} );

module.exports = router;