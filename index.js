const express = require('express');
const { exec } = require('child_process');
const app = express();
var cors = require('cors')

app.use(cors())

app.get('/execute', (req, res) => {
  console.log(req.query.hash)
  exec(`bash force.sh ${req.query.hash}`, (error, stdout, stderr) => {
    if (error) {
      res.send(`Error: ${error}`);
      return;
    }
    res.send(`stdout: ${stdout}\nstderr: ${stderr}`);
  });
});

app.listen(3002, () => console.log('Server running on port 3000'));