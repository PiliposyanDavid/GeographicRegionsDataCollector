const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let citiesSchema = Schema({
    name: {type: String, index: {unique: true}},
    timezones: {type: [String]},
    is_capital: {type: Boolean},
    country: {type: Schema.ObjectId, ref: "countries"},
});

module.exports = mongoose.model('cities', citiesSchema);
