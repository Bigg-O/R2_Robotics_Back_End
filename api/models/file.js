const mongoose = require('mongoose');

const fileSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user_id: {
        type: String,
        required: true
    },
    product_info: {
        type: String
    },
    product_name: {
        type: String
    },
    reference_number: {
        type: String
    },
    country: {
        type: String
    },
    date_created: {
        type: Date
    },
    file_path: {
        type: String,
        required: true
    },
    file_mimetype: {
        type: String,
        required: true
    }
    // _id: mongoose.Schema.Types.ObjectId,
    // user_id: { type: String, required: true },
    // productInfo: { type: String },
    // productName: { type: String },
    // referenceNumber: { type: Number },
    // country: { type: String },
    // dateCreated: { type: Date, required: true },
    // image_id: { type: String },
    // file_id: {type: String }
});

module.exports = mongoose.model('File', fileSchema);