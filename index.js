

const express = require('express');
const { categoryRoutes } = require('./routes/categoryRoutes');
const { productRoutes } = require('./routes/productRoutes');
const { countryRoutes } = require('./routes/countryRoutes');
const { writerRoutes } = require('./routes/writerRoutes');
const { bookRoutes } = require('./routes/bookRoutes');

const { booksFront } = require('./components/books')

const { db } = require('./config/db');
const app = express();
require('dotenv').config()

db.connect();
booksFront.connect();

app.use(express.json())

app.use('/api/categories', categoryRoutes)


app.use('/api/products', productRoutes)

app.use('/api/country', countryRoutes)

app.use('/api/writer', writerRoutes)

app.use('/api/book', bookRoutes)




app.listen(3000);

