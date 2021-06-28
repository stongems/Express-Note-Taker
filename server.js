require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("welcome")
}),

app.get('/notes', (req, res) => {
    res.send("notes")
}),

app.get('/', (req, res) => {
    res.send("welcome")
})

app.listen(process.env.PORT, () => console.log(`App listening on process.env.PORT ${process.env.PORT}`));


