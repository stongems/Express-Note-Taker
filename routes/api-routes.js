// const { LengthRequired } = require("http-errors");

// LengthRequired('dotenv').config()

// const express = require("express");
// const { Router } = require("express");
const router = require("express").Router();
const notes = require("../db/db.json");
const uuid = require('uuid');


// DEFINITION FOR THE SERVER CALL
router.get(
    "/api/notes",
    (req, res) => {
        res.json(notes)
    }
)
router.post(
    "/api/notes",
    (req, res) => {
        const note = req.body;
        note.id = uuid.v1();
        notes.push(note);
        res.json(notes);
    }
)
router.delete (
    "/api/notes/:id", (req, res) => {
        notes.forEach(note => {
            console.log("Note:",note);
        })
        res.json(notes)
    }
)

module.exports = router