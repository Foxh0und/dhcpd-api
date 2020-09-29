const express = require("express");
const router = express.Router();

router.get("", (request, response) => {
  const health = {
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now()
  };
  try {
    response.send(health);
  } catch (e) {
    response.status(503).send();
  }
});

module.exports = router;
