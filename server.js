 
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080


// Creates the public fold to be client URL path
app.use(express.static("public"))



// DECRYPTION link to api-routs.js line 23 req.body
app.use(express.urlencoded({extended:true}))
// data comes back encrypted from above, json decrypts the info
app.use(express.json())


// HTML && API route, url path for the server
app.use(require("./routes/api-routes"))
app.use(require("./routes/html-routes"))

// This activates the PORT allows browser to talk to server
app.listen( PORT, () => console.log(`App listening on process.env.PORT ${PORT}`));


