const { Writer } = require("../models/Writer")


const writerController = {
    getAll: (req, res) => {

        let limitWriter = req.query.limit;

        Writer.find({
            // unitPrice: { $gt: 1800, $lt: 2500 },
        })
            .limit(limitWriter)
            .populate("country")
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    getById: (req, res) => {
        let id = req.params.id

        Writer.findById(id).populate("country")
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

        let writer = new Writer({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birthDate: req.body.birthDate,
            country: req.body.country
        })

        writer.save()

        res.json(writer)
    },
    // getAllByCategoryId: (req, res) => {
    //     let id = req.params.id

    //     Product.find({ "country": id }).populate("country")
    //         .then(data => {
    //             res.json(data)
    //         })
    //         .catch(err => {
    //             res.status(500).json(err)
    //         })
    // },
    delete: (req, res) => {
        let id = req.params.id;

        Writer.findByIdAndDelete(id)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}


module.exports = {
    writerController
}