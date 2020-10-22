const express = require("express");
const service = require("..//service/dhcpdService");

const router = express.Router();

router.get("/leases", async (request, response) => {
  try {
    const leases = await service.getLeases();
    if (leases.length === 0) {
      response.status(204).send();
      return;
    }
    response.status(200).json(leases);
  } catch (err) {
    response.status(404).json({ msg: err.message });
  }
});

router.get("/config", async (request, response) => {
  try {
    const config = await service.getConfig();
    return response.status(200).json(config);
  } catch (err) {
    response.status(404).json({ msg: err.message });
  }
});

module.exports = router;
