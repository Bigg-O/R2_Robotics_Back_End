const mongoose = require('mongoose');

const fileSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user_id: { type: String, required: true },
    productInfo: { type: String },
    productName: { type: String },
    referenceNumber: { type: Number },
    country: { type: String },
    dateCreated: { type: Date, required: true },
    image: { },
    file: { }
});

module.exports = mongoose.model('File', fileSchema);