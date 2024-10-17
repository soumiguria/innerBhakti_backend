const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config");
const programRoutes = require("./routes/programRoutes");
const trackRoutes = require("./routes/trackRoutes");

require("dotenv").config();

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", programRoutes);
app.use("/api", trackRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
