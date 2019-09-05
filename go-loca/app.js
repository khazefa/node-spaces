const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug');

let latitude = '12.9715987';
let longitude = '77.5945627';

app.get('/', (req, res) => res.render('index', {lat: latitude, lng: longitude}) )
app.get('/UpdateDetails', (req, res) => {
    latitude = req.param('latitude');
    longitude = req.param('longitude');
    // res.send('Location Updated \n latitude:  ' + latitude + ' \n Longitude:' + longitude);
    res.render('index', { lat: latitude, lng: longitude })
})
app.get('/breadcrumb', (req, res) => res.render('breadcrumb'))
app.listen(port, () => console.log('Example app listening on port ' + port + '!'))