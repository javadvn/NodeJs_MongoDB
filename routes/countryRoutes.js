const express = require('express');
const { countryController } = require('../controllers/countryController');


const countryRoutes = express.Router();



countryRoutes.get('/', countryController.getAll)
countryRoutes.get('/:id', countryController.getById)
countryRoutes.delete('/:id', countryController.delete)
countryRoutes.post('/', countryController.add)




module.exports = {
  countryRoutes
}