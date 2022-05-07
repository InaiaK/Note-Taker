const express = require('express');
const fs = require ('fs');
const notes = require('./db/db.json');
const path = require ('path');
const uuid = require ('uuid');
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






// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/terms', (req, res) => res.json(termData));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});