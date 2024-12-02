const express = require("express");
const fs = require('fs');
const path = require('path');


// console.log(path.extname("BACKEND-BASICS/example.txt"));

// const fullPath = path.join(__dirname)

// console.log(fullPath)

// fs.writeFileSync('example.txt', "Hello, Node.js!", 'utf-8')

// const data = fs.readFileSync('example.txt', 'utf-8');
// console.log(data)

// fs.appendFileSync('example.txt', " \nHow are you?")

// fs.unlinkSync('example.txt');

fs.readFile('example.txt', 'utf-8', (err, data)=>{

  if(err){
      console.log("Error in reading file", err);

      return;
  }

  console.log('File content', data)

})

console.log('Reading file....')


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
