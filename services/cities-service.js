const assert = require('assert');

class CitiesService {
    constructor(db) {
        this.db = db;
    }

    async add(name, timezones, isCapital, countryId) {
        assert(name, "name param is required");
        return this._getCollection().create({
            "name": name,
            "timezones": timezones,
            "is_capital": isCapital,
            "country": countryId
        });
    }

    async remove(name) {
        return this._getCollection().remove({"name": name});
    }

    async get(name) {
        return this
            ._getCollection()
            .find({name: name})
            .lean()
            .exec();
    }

    _getCollection() {
        return this.db.cities;
    }
}

module.exports = CitiesService;
