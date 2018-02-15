const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI);

const app = express();

//app.use(passport.initialize());
// app.use(passport.session());

require('./routes/authRoutes')(app);
//console.developers.google.com

// Lancement du serveur sur le port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);