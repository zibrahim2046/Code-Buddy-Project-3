const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const config = require('config');

//Middleware defined
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')));
    // app.use(express.static('client/build'));
}

app.use(routes);

// const db = config.get('mongoURI');

const db = "mongodb://<dbuser>:<dbpassword>@ds117605.mlab.com:17605/heroku_c1hpwnmn"

mongoose.connect(process.env.MONGODB_URI || db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Send every request to the React app
// Define any API routes before this runs
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
