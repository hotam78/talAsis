const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    img: {
        type: String,
    },
    title: {
        he : {
            type: String
        },
        en : {
            type: String
        },  
    },
});

export const CategoryModel = mongoose.models.Category || mongoose.model('Category', CategorySchema);