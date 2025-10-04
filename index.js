const express = require('express');
const cors = require('cors');
const jwt = require("jsonwebtoken");
const jwtUtilities = require('./middleware/jwtUtilities');
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

const loginRoutes = require('./routes/loginRoutes');
app.use('/login', loginRoutes);

const activityRoutes = require('./routes/activityRoutes');
const authenticationRoutes = require('./routes/authenticationRoutes');
const jwtRoutes = require('./routes/jwtRoutes');

app.use(jwtUtilities.verifyJwt);
app.use('/auth',authenticationRoutes);
app.use('/activity',activityRoutes);
app.use('/jwt',jwtRoutes);

app.listen(port, () => {
    console.log("Server listening at port 8080");
});