const { LengthRequired } = require("http-errors");

LengthRequired('dotenv').config()

const express = require("express");
const { Router } = require("express");

router.get(
    "/notes",
    (req, res) => {
        res.json(notes)
    }
)
router.post(
    "/notes",
    (req, res) => {
        const note = req.body;
        note.id = uuid.v1();
        notes.push(note);
        res.json(notes);
    }
)
router.delete (
    "/notes/:id", (req, res) => {
        
    }
)