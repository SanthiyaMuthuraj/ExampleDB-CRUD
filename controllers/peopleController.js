// controllers/peopleController.js
const Person = require('../models/Person');
const Joi = require('joi');

const createPerson = async (request, h) => {
  try {
    const person = new Person({
      name: request.payload.name,
      age: request.payload.age,
      email: request.payload.email,
    });
    await person.save();
    return h.response(person).code(201);
  } catch (error) {
    return h.response({ error: error.message }).code(400);
  }
};

const getPeople = async (_, h) => {
  try {
    const people = await Person.find();
    return h.response(people);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};

const updatePerson = async (request, h) => {
  try {
    const person = await Person.findById(request.params.id);
    if (!person) {
      return h.response({ message: 'Person not found' }).code(404);
    }

    person.name = request.payload.name || person.name;
    person.age = request.payload.age || person.age;
    person.email = request.payload.email || person.email;
    person.updatedAt = Date.now();

    await person.save();
    return h.response(person);
  } catch (error) {
    return h.response({ error: error.message }).code(400);
  }
};

const deletePerson = async (request, h) => {
  try {
    const result = await Person.deleteOne({ _id: request.params.id });
    if (result.deletedCount === 0) {
      return h.response({ message: 'Person not found' }).code(404);
    }
    return h.response({ message: 'Person deleted' });
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};

module.exports = {
  createPerson,
  getPeople,
  updatePerson,
  deletePerson,
};
