const { default: mongoose } = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: String,
    description: String,
    addDate: { type: Date, default: Date.now }
})


const Category = mongoose.model('Category', categorySchema);

module.exports = {
    Category
}