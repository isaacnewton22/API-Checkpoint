const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    nom: String,
    age: Number,
})

const userModel = model('user', userSchema)

module.exports = userModel;