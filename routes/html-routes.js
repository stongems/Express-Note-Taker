const router = require("express").Router()
const path = require("path")

// Allows us to get the entire path and send it back to the browser
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
}),

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})
// links to the server
module.exports = router


