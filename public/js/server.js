const express = require('express');
const fs = require ('fs');
const notes = require('./db/db.json');
const path = require ('path');
const uuid = require ('uuid'); // unique ID for each note
const {DH_CHECK_P_NOT_SAFE} = require ('constants');

const app = express();
var PORT = process.env.PORT || 4023;

// Middleware 
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

// Routes for APIs
// GET notes saved & joins it in db.json
app.get('/api/notes',(req,res) => {
  res.sendFile(path.join(__dirname, '/db/db.json'))
});

//POST function to add new notes to db.json
app.post('/api/notes', (req,res) => {
  const notes = JSON.parse(fs.readFileSync('./db/db.json'));
  const newNotes = req.body;
  newNotes.id = uuid.v4();
  fs.writeFileSync('./db/db.json', JSON.stringify (notes))
  res.json(notes);
});

// DELETE notes
app.delete('/api/notes/:id', (req,res) => {
  const notes = JSON.parse(fs.readFileSync('./db/db.json'));
  const delNote = notes.filter((rmvNote) => rmvNote.id !== req.params.id);
  fs.writeFileSync('./db/db.json', JSON.stringify(delNote));
  res.json(delNote);
  })


// HTNL pages 

// Home page (index.html)
app.get('/', function (req,res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// notes.html
app.get('/notes', function (req,res) {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// Start 
app.listen(PORT, function () {
  console.log('App listening on PORT:' + PORT);
});

