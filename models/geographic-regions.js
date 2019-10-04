const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let geographicRegionsSchema = Schema({
    name: {type: String, index: {unique: true}}
});

module.exports = mongoose.model('geographic_regions', geographicRegionsSchema);
