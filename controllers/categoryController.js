const { Category } = require("../models/Category")


const categoryController = {
    getAll: (req, res) => {

        Category.find()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json(err)
            })

    },
    getById: (req, res) => {
        let id = req.params.id;

        Category.findById(id)
            .then(data => {
                if (data)
                    res.json(data);
                else
                    res.status(404).json({ 'msg': 'Not found!' })
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    add: (req, res) => {
        let category = new Category({
            name: req.body.name,
            description: req.body.description
        })

        category.save();

        res.json(category);
    },
    deleteById: (req, res) => {

        let id = req.params.id;

        Category.findByIdAndDelete(id)
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    update: (req, res) => {
        let id = req.params.id;

        Category.findById(id)
            .then(data => {
                data.name = req.body.name;
                data.description = req.body.description;

                data.save();

                res.json(data);
            })
            .catch(err => {
                res.status(500).json(err);
            })

    }
}


module.exports = {
    categoryController
}

