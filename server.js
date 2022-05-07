const express = require("express")
//const {DH_CHECK_P_NOT_SAFE} = require ('constants');

const app = express();
var PORT = process.env.PORT || 4023;

// Middleware 
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));




app.use(require("./routes/routes"))
app.use(require("./routes/html"))




// Start 
app.listen(PORT, function () {
  console.log('App listening on PORT:' + PORT);
});

