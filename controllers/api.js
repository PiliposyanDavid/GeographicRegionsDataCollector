const GeographicRegionsService = require('../services/geographic-regions-service');
const CountriesService = require('../services/countries-service');
const CitiesService = require('../services/cities-service');

module.exports = (app) => {
    const geographicRegionsService = new GeographicRegionsService(app.db1);
    const countriesService = new CountriesService(app.db1);
    const citiesService = new CitiesService(app.db1);

    //----------------------> Geographic Regions <----------------------
    app.get('/api/geographic/regions/:name', (req, res, next) => {
        let name = req.query.name;
        return geographicRegionsService.get(name).then((data) => {
            return res.send({
                status: "success",
                data: data
            });
        }).catch((err) => {
            return res.send({
                status: "error",
                message: err
            })
        });

    });
    app.post("/api/geographic/regions", (req, res, next) => {
        const name = req.body.name;
        return geographicRegionsService.add(name).then((data) => {
            return res.send({
                status: "success",
                data: data
            });
        }).catch((err) => {
            return res.send({
                status: "error",
                message: err
            })
        });
    });
    app.delete("/api/geographic/regions/:name", (req, res, next) => {
        const name = req.params.name;
        return geographicRegionsService.remove(name).then(() => {
            return res.send({
                status: "success"
            });
        }).catch((err) => {
            return res.send({
                status: "error",
                message: err
            })
        });
    });

    //----------------------> Countries <----------------------
    app.get('/api/countries/:name', (req, res, next) => {
        const name = req.params.name;
        return countriesService.get(name).then((data) => {
            return res.send({
                status: "success",
                data: data
            });
        }).catch((err) => {
            return res.send({
                status: "error",
                message: err
            })
        });
    });
    app.post("/api/countries", (req, res, next) => {
        const name = req.body.name;
        const alpha2Code = req.body.alpha2Code;
        const alpha3Code = req.body.alpha3Code;
        const population = req.body.population;
        const latlng = req.body.latlng;
        const area = req.body.area;
        const region = req.body.region;

        return countriesService.add(name, alpha2Code, alpha3Code, population, latlng, area, region).then((data) => {
            return res.send({
                status: "success",
                data: data
            });
        }).catch((err) => {
            return res.send({
                status: "error",
                message: err
            })
        });
    });
    app.delete("/api/countries/:name", (req, res, next) => {
        const name = req.params.name;
        return countriesService.remove(name).then(() => {
            return res.send({
                status: "success"
            });
        }).catch((err) => {
            return res.send({
                status: "error",
                message: err
            })
        });
    });

    //----------------------> Cities <----------------------
    app.get('/api/cities/:name', (req, res, next) => {
        const name = req.params.name;
        return citiesService.get(name).then((data) => {
            return res.send({
                status: "success",
                data: data
            });
        }).catch((err) => {
            return res.send({
                status: "error",
                message: err
            })
        });
    });
    app.post("/api/cities", (req, res, next) => {
        const timezones = req.body.timezones;
        const name = req.body.name;
        const isCapital = req.body.is_capital;
        const country = req.body.country;

        return citiesService.add(name, timezones, isCapital, country).then((data) => {
            return res.send({
                status: "success",
                data: data,
            });
        }).catch((err) => {
            return res.send({
                status: "error",
                message: err
            })
        });
    });
    app.delete("/api/cities/:name", (req, res, next) => {
        const name = req.params.name;
        return citiesService.remove(name).then(() => {
            return res.send({
                status: "success"
            });
        }).catch((err) => {
            return res.send({
                status: "error",
                message: err
            })
        });
    });

    app.get('/*', (req, res) => {
        res.send('Bari apiV3');
    });
};

