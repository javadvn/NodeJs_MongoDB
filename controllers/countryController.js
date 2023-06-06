const { Country } = require("../models/Country")


const countryController = {
    getAll: (req, res) => {

        let limitCountry = req.query.limit;

        Country.find({
            // unitPrice: { $gt: 1800, $lt: 2500 },
        })
            .limit(limitCountry)
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    getById: (req, res) => {
        let id = req.params.id

        Country.findById(id)
            .then(data => {
                if (data)
                    res.json(data)
                else
                    res.status(404).json({});
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    add: (req, res) => {

        let country = new Country({
            name: req.body.name,
        })

        country.save()

        res.json(country)
    },
    // getAllByCategoryId: (req, res) => {
    //     let id = req.params.id

    //     Product.find({ "category": id }).populate("category")
    //         .then(data => {
    //             res.json(data)
    //         })
    //         .catch(err => {
    //             res.status(500).json(err)
    //         })
    // },
    delete: (req, res) => {
        let id = req.params.id;

        Country.findByIdAndDelete(id)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}


module.exports = {
    countryController
}