const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use("/lease", require("./routes/lease.js"));
app.listen(5000, () => console.log(`App Started On ${PORT}`));
