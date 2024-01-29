// routes/peopleRoutes.js
const peopleController = require('../controllers/peopleController');
const Joi = require('joi');

const routes = [
  {
    method: 'POST',
    path: '/people',
    handler: peopleController.createPerson,
    options: {
      validate: {
        payload: Joi.object({
          name: Joi.string().required(),
          age: Joi.number().integer().min(1).required(),
          email: Joi.string().email().required(),
        }),
      },
    },
  },
  {
    method: 'GET',
    path: '/people',
    handler: peopleController.getPeople,
  },
  {
    method: 'PATCH',
    path: '/people/{id}',
    handler: peopleController.updatePerson,
    options: {
      validate: {
        params: Joi.object({
          id: Joi.string().hex().length(24).required(),
        }),
        payload: Joi.object({
          name: Joi.string(),
          age: Joi.number().integer().min(1),
          email: Joi.string().email(),
        }),
      },
    },
  },
  {
    method: 'DELETE',
    path: '/people/{id}',
    handler: peopleController.deletePerson,
    options: {
      validate: {
        params: Joi.object({
          id: Joi.string().hex().length(24).required(),
        }),
      },
    },
  },
];

module.exports = routes;
