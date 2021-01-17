const express = require("express");
const cors = require('cors');
const path = require("path");
// const db = require('./db');
const router = require('./router');

const app = express();
const apiPort = 5000;

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
// app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
// app.use(bodyParser.json());

app.use('/api', router);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(apiPort,()=> console.log(`Server is running on port ${apiPort}`));
