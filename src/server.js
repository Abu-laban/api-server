'use strict';

const express = require('express');
const app = express();

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const loggerMeddleware = require('./middleware/logger');

const customerRoutes = require('./routes/customer');
const foodRoutes = require('./routes/food')
const clothesRoutes = require('./routes/clothes')

app.use(express.json());
app.use(loggerMeddleware);

app.get('/', (req, res) => {
    res.status(200).send('Hello 👋')
})

app.use(customerRoutes);
app.use(foodRoutes);
app.use(clothesRoutes);

app.use('*', notFoundHandler);
app.use(errorHandler);

const start = PORT => {
    app.listen(PORT, () => {
        console.log(`Server is Running on Port ${PORT}`)
    })
}
module.exports = {
    server: app,
    start: start
}