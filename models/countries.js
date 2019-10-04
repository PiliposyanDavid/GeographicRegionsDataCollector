const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let countriesSchema = Schema({
    name: {type: String, index: {unique: true}},
    alpha2Code: {type: String, index: {unique: true}},
    alpha3Code: {type: String, index: {unique: true}},
    population: {type: Number},
    latlng: {type: []},
    area: {type: Number},
    region: {type: Schema.ObjectId, ref: 'geographic_regions'},
});

module.exports = mongoose.model('countries', countriesSchema);
