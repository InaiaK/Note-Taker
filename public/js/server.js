const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require ('util');

// util to create promises .
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFileSync);



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
