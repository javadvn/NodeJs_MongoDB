const { default: mongoose } = require("mongoose");


const BookSchema = mongoose.Schema({
    name: String,
    description: String,
    publishDate: Date,
    addDate: { type: Date, default: Date.now },
    writer: { type: mongoose.Schema.Types.ObjectId, ref: 'Writer' }
})

const Book = mongoose.model('Book', BookSchema)

module.exports = {
    Book
}
