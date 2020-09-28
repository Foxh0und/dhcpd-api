const express = require( 'express' );
const dhcpd = require( 'dhcpd-node' );
const fs = require('fs');
const { default: parseLease } = require('dhcpd-node/dist/dhcpd-lease-parser');

const router = express.Router();

//TODO: Add test.leases to config.
router.get( '', (request, response ) => {
    fs.readFile('/home/amiritis/test.leases', 'utf8', function(err, data) {
        if (err){
            throw err;
        } 
        const leases = parseLease( data );
        response.status( 200 ).json(leases);
    });
} );

module.exports = router;