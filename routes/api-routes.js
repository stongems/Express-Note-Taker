const { LengthRequired } = require("http-errors");

LengthRequired('dotenv').config();

const express = require("express");
const { Router } = require("express");
const router = require("express").Router();
let notes = require("../db/db.json");
const uuid = require('uuid');
const fs = require("fs")

// DEFINITION FOR THE SERVER CALL
router.get(
    "/api/notes",
    (req, res) => {
        res.json(notes)
    }
)
// Clients send this data to the server in req.body
// need decryption through data parser on server.js 
router.post(
    "/api/notes",
    (req, res) => {
        console.log(req.body)
        let note = req.body;
        note.id = uuid.v1();
        notes.push(note);
        fs.writeFileSync("./db/db.json",JSON.stringify(notes))

        res.json(notes);
    }
)
//================================================== DELETE NOTE
router.delete (
    "/api/notes/:id", (req, res) => {
     notes = notes.filter(note => {
         return note.id !== req.params.id
        })
        fs.writeFileSync("./db/db.json",JSON.stringify(notes))

        res.json(notes)
    }
)

module.exports = router