 
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080


app.use(express.static("public"))

app.use(express.urlencoded({extended:true}))
// data comes back encrypted from above, json decrypts the info
app.use(express.json())
// HTML && API route, url path for the server
app.use(require("./routes/api-routes"))
app.use(require("./routes/html-routes"))

app.listen( PORT, () => console.log(`App listening on process.env.PORT ${PORT}`));


