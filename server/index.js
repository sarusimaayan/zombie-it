const express = require("express");
const cors = require('cors');
const path = require("path");
const router = require('./router');
const bodyParser = require('body-parser');

const app = express();
const apiPort = 5000;

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());

app.use('/api', router);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(apiPort,()=> console.log(`Server is running on port ${apiPort}`));
