const express = require("express");
const cors = require('cors');

const nodeSearchRoute = require("./routes/nodeSearchRoute");
const pythonSearchRoute = require("./routes/pythonSearchRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/node-search", nodeSearchRoute);
app.use("/python-search", pythonSearchRoute);


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});