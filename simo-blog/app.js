const express = require('express');
const app = express();
const port = 3001;

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/simo-blog");

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true } ));

let postSchema = new mongoose.Schema({body:String});
let Post = mongoose.model('Post', postSchema);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req, res) => res.render('index'));
app.listen(port, () => console.log('App listening on port ' + port + '!'));