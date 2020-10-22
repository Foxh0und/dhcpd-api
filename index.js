const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use("/dhcp", require("./routes/lease.js"));
app.use("/healthz", require("./routes/healthz.js"));

app.listen(PORT, () => console.log(`App Started On ${PORT}`));
