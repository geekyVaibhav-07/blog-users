const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const loginRoutes = require('./routes/loginRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/login', loginRoutes);
app.use('/user', userRoutes);

app.all((req, res) => {
    res.status(404).json({
        message: 'NOT FOUND'
    })
})

module.exports = app;