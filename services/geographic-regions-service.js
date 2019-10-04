const assert = require("assert")

class GeographicRegions {
    constructor(db) {
        this.db = db;
    }

    async add(name) {
        assert(name, "name param is required");
        return this._getCollection().create({"name": name});
    }

    async remove(name) {
        return this._getCollection().remove({"name": name});
    }

    async get(name) {
        return this._getCollection({name: name})
            .find()
            .lean()
            .exec();
    }


    _getCollection() {
        return this.db.geographic_regions;
    }
}

module.exports = GeographicRegions;
