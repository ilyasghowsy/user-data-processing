import mongoose, { Connection } from 'mongoose';

mongoose.connect('mongodb://localhost:27017/azTestDB');
const connection: Connection = mongoose.connection;

connection.on('connected', () => {
  console.log('Connected to MongoDB with Mongoose');
});
