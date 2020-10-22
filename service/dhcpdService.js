const fs = require("fs").promises;
const { default: parseLease } = require("dhcpd-node/dist/dhcpd-lease-parser");
require("dotenv").config();

const functions = {
  async getLeases() {
    try {
      const data = await fs.readFile(process.env.LEASE_PATH, "utf8");
      const leases = parseLease(data);
      return leases;
    } catch (err) {
      switch (err.errno) {
        case -2:
          console.log(err);
          throw err;
        default:
          break;
      }
    }
  },
  async getConfig() {
    try {
      const data = await fs.readFile(process.env.DHCP_CONFIG_PATH, "utf8");
      return data;
    } catch (err) {
      switch (err.errno) {
        case -2:
          console.log(err);
          throw err;
        default:
          break;
      }
    }
  }
};

module.exports = functions;
