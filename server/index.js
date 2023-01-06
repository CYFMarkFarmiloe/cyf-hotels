//load the 'express' module which makes writing webservers easy
const express = require('express');
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express();
// set the server up to serve all the client files from the static location, ../build
app.use(express.static(path.join(__dirname, '../build')));
// add facility to convert body from a json string into a javascript object automatically.
app.use(express.json());

const hotels = [
    {id: 1, name: 'Fawlty Towers', rating: 1},
    {id: 2, name: 'Dorchester', rating: 5},
    {id: 3, name: 'Hilton', rating: 4}
];

app.get('/hotels', (req, res) => {
    console.log('fetching hotels');
    res.json(hotels);
});


app.listen(PORT, () => {
    console.log(`listening on port : ${PORT}`);
});
