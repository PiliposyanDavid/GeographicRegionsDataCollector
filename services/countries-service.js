const assert = require("assert")

class CountriesService {
    constructor(db) {
        this.db = db;
    }

    async add(name, alpha2Code, alpha3Code, population, latlng, area, regionId) {
        assert(name, "name param is required");
        assert(alpha2Code, "alpha2Code param is required");
        assert(alpha3Code, "alpha3Code param is required");

        return this._getCollection().create({
            "name": name,
            "alpha2Code": alpha2Code,
            "alpha3Code": alpha3Code,
            "population": population,
            "latlng": latlng,
            "area": area,
            "region": regionId
        });
    }

    async remove(name) {
        return this._getCollection().remove({"name": name});
    }

    async get(name) {
        return this._getCollection()
            .find({name: name})
            .lean()
            .exec();
    }

    _getCollection() {
        return this.db.countries;
    }
}

module.exports = CountriesService;
