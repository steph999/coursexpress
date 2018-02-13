const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');
require('./models/User');

mongoose.connect(keys.mongoURI);


const app = express();

// app.use(
//     cookieSession({
//         maxAge: 30 * 24 * 60 * 60 * 1000,
//         keys: [keys.cookieKey]
//     })
// );
// app.use(passport.initialize());
// app.use(passport.session());

require('./routes/authRoutes')(app);
//console.developers.google.com

// Lancement du serveur sur le port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);