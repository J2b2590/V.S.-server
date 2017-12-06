const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

			name: String,
			age: Number,
			phoneNumber: Number,
			comment: String
})

module.exports = mongoose.model('User', userSchema);