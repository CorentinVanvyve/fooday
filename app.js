const express = require('express')
require('dotenv').config()
const app = express();
const cors = require("cors");
const userRoutes = require('./routes/user.routes');
const port = process.env.PORT

const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});


app.use('/users', userRoutes);
