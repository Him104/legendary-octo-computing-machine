const express = require("express");
const fs = require('fs');

fs.writeFileSync('example.txt', "Hello, Node.js!", 'utf-8')

const data = fs.readFileSync('example.txt', 'utf-8');
console.log(data)

fs.appendFileSync('example.txt', " \nHow are you?")

// fs.unlinkSync('example.txt');

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
