const express = require('express');
const router = express.Router();
const app = express();
const port = 3000

// Route not found (404)
app.use(function (req, res, next) {
    return res.status(404).send({ message: 'Route' + req.url + ' Not found.' });
});

// Any error
app.use(function (err, req, res, next) {
    return res.status(500).send({ error: err });
});

router.get('/login', function (req, res, next) {
    res.send('Hello world');
});
app.route('/Node').get( (req, res) => res.send('Tutorial on Node') );

app.get('/about', function (req, res) { res.send('about'); });

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log('Example app listening on port ' + port + '!'));