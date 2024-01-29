// models/Person.js
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
