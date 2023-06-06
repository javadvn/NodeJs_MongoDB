const express = require('express');
const { bookController } = require('../controllers/bookController');


const bookRoutes = express.Router();



bookRoutes.get('/', bookController.getAll)
bookRoutes.get('/:id', bookController.getById)
bookRoutes.delete('/:id', bookController.delete)
bookRoutes.post('/', bookController.add)




module.exports = {
  bookRoutes
}