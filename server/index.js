//load the 'express' module which makes writing webservers easy
const express = require('express');
const path = require('path')
// render.com will set its own port by setting the PORT environment variable
// so this uses that value if it exists and defaults to 5000 otherwise.
const PORT = process.env.PORT || 5000

// start the express application and save a reference to it in the app variable.
const app = express();

console.log('NODE_ENV=' + process.env.NODE_ENV);
if (process.env.NODE_ENV==='development') {
    // When running in development mode, we will be calling from the react dev server,
    // started by 'npm run start' to our backend server, started by 'node server/index.js'
    // These servers will be on different ports, so we need to use the cors library
    // to allow this.
    const cors = require("cors");
    app.use(cors());
} else {
    // In production, all the React frontend will be 'compiled' down to just
    // static html, css, js and image files, all saved in the build folder.
    // So the SINGLE server needs to serve up all these client files from the static location
    // Express has a utility for doing that :-)
    app.use(express.static(path.join(__dirname, '../build')));
}

// add facility to convert body from a json string into a javascript object automatically.
app.use(express.json());

// Our data. We'll put this in a database next week.
const hotels = [
    {id: 1, name: 'Fawlty Towers', rating: 1},
    {id: 2, name: 'Dorchester', rating: 5},
    {id: 3, name: 'Hilton', rating: 4}
];

// Our only endpoint so far.
app.get('/hotels', (req, res) => {
    console.log('fetching hotels');
    res.json(hotels);
});

// OK, we have finished configuring how we want express to work, 
// so now we tell it to start listening for requests.
app.listen(PORT, () => {
    console.log(`listening on port : ${PORT}`);
});

// I also added scripts called 'server:dev' and 'server:host' to the package.json.
// So to run the server in develpment mode i'd run 'npm run server:dev'
// While on render.com the start command could be 'npm run server:host'.
// though you could just run 'node server/index.js' directly instead.
