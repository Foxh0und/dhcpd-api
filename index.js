const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use("/lease", require("./routes/lease.js"));
app.use("/health", require("./routes/health.js"));

app.listen(PORT, () => console.log(`App Started On ${PORT}`));
