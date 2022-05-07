const app = require("express").Router()
const express = require('express');
const fs = require ('fs');
let notes = require('../db/db.json');
const uuid = require ('uuid'); 

// Routes for APIs
// GET notes saved & joins it in db.json
app.get('/api/notes',(req,res) => {
 notes=JSON.parse(fs.readFileSync("./db/db.json"))   
 res.json(notes)
  });
  
  //POST function to add new notes to db.json
  app.post('/api/notes', (req,res) => {
  
    let newNotes = req.body;
    newNotes.id = uuid.v4();
    notes.push(newNotes)
    fs.writeFileSync('./db/db.json', JSON.stringify (notes))
    res.json(notes);
  });
  
  // DELETE notes
  app.delete('/api/notes/:id', (req,res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));
    const delNote = notes.filter((rmvNote) => rmvNote.id !== req.params.id);
    fs.writeFileSync('./db/db.json', JSON.stringify(delNote));
    res.json(delNote);
    });


    module.exports = app