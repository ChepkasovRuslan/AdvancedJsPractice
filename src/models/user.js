const mongoose = require('mongoose');
const { Schema } = mongoose;

// Создать модель для работы с таблицей.
const userSchema = new Schema({
  fullname: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  }
});

module.exports = User = mongoose.model('users', userSchema);