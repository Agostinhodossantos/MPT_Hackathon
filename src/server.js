const express = require('express')
const app = express()
const port = process.env.PORT || 2000;
const ejs = require("ejs");

// setup view engine
app.use(express.static('public'));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);


app.use(require('./routes/index.js'));

app.listen(port, ()=> {
    console.log(`app listening at http://localhost:${port}`)
})