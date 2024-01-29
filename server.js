// server.js
const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
const peopleRoutes = require('./routes/peopleRoutes');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  await mongoose.connect('mongodb+srv://Santhiya:sandy@cluster0.hi1cuc6.mongodb.net/api-crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  server.route(peopleRoutes);

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
