const express = require('express')
const path = require('path')
const cors = require('cors')
const DIST = path.join(__dirname, '../public/minesweeper-dist');
const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.static(DIST));

app.listen(PORT, (error) => {
  if(error){
    console.log(error)
  }
  console.log('Listening on port 3000')
})
