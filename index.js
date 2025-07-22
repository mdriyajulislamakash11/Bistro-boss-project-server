const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000;

// midleware
app.use(cors());
app.use(express.json());




app.get('/', (req, res) => {
    res.send('Bistro Boos Is Sitting')
});

app.listen(port, () => {
    console.log(`Bistro Boos is on the port: ${port}`)
})