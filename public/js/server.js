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
// gets notes saved & joins it in db.json
app.get('/api/notes',(req,res) => {
  res.sendFile(path.join(__dirname, '/db/db.json'))
});

// Post function to add notes to db 




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
