const express = require("express");
const app = express();
const cors = require("cors");
// App Config
const corsOptions = {
    origin: ["http://localhost:5173"],
}
app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from the Express.js Server');
});

app.listen(3000, () => {
    console.log("Escuchando http://localhost:3000");
});