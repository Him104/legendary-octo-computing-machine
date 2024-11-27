const express = require("express");

const app = express();

// Define a port for the server
const PORT = 300;

app.get("/response", (req, res) => {
  res.status(200).send(`Server is running on PORT ${PORT}`);
});

// midleware to parse  JSON request
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
