const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;

const places = require('./data/places.json');
const hotels = require('./data/hotels.json');

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

app.get('/hotels/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedHotels = hotels.filter((hotel) => hotel.location_id === id);

    res.send(selectedHotels);
});

app.listen(port, () => {
    console.log('Listening on port: ', port);
});
