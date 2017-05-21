const path = require('path');
const publicPath =  path.join(__dirname, '../public');
const express = require('express');

const port = process.env.PORT || 8000;
var app = express();
console.log(publicPath);
//console.log()

app.use(express.static(publicPath));


app.listen(port, () =>{
  console.log(`Server is open at ${port}:`);
});
