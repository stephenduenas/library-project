const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bookRoute = require('./routes/bookRoute.js');

dotenv.config();

const app = express();

app.use(express.json({ limit: "30mb", extended: true}));
app.use(express.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    app.listen(PORT, () => { console.log(`Server running on port ${PORT}`)});
});

app.use('/book', bookRoute);
