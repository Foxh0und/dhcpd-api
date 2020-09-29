const express = require("express");
const fs = require("fs");
const { default: parseLease } = require("dhcpd-node/dist/dhcpd-lease-parser");
require("dotenv").config();

const router = express.Router();

router.get("", (request, response) => {
  fs.readFile(process.env.LEASE_PATH, "utf8", function (err, data) {
    if (err) {
      switch (err.errno) {
        case -2:
          console.log(err);
          response.status(404).json({ msg: err.message });
          return;
        default:
          break;
      }
    }
    const leases = parseLease(data);
    if (leases.length === 0) {
      response.status(204);
      return;
    }

    response.status(200).json(leases);
  });
});

module.exports = router;
