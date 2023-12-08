const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//Hello world
const ApiV1 = require('./controllers/api');
const AppConstants = require('./settings/constants');

const app = express();

app.set('port', process.env.Port || 3333);
app.use(bodyParser.urlencoded({
    limit: 1024 * 1024, //1MB
    extended: true
}));
app.use(bodyParser.json({
    limit: 20 * 1024 * 1024, //20MB
    extended: true
}));

require('./models/geographic-regions');
require('./models/countries');
require('./models/cities');

const db1 = mongoose.createConnection(AppConstants.DB1_URL);

app.db1 = {
    geographic_regions: db1.model('geographic_regions'),
    countries: db1.model('countries'),
    cities: db1.model('cities'),
};

ApiV1(app);

app.listen(app.get('port'), function () {
    console.log('Server is listening on port ' + app.get('port'));
});
