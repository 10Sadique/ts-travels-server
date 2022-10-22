const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;

const places = require('./data/places.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send({
        message: 'TS Travels Server.',
    });
});

app.get('/places', (req, res) => {
    res.send(places);
});

app.get('/places/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedPlace = places.find((place) => place.id === id);

    res.send(selectedPlace);
});

app.listen(port, () => {
    console.log('Listening on port: ', port);
});
