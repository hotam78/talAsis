const mongoose = require('mongoose');


const ItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        require: true,
      },
      discount: {
        type: Number,
      },
      images: [String],
      isActive: {
        type: Boolean,
        default: true,
      },
      inStock: {
        type: Number,
      },
      material: [String],
      category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'category'
      },
      sold: {
        type: Number,
      },
    //   collection: String,
    // isLiked: {
    //   type: Boolean,
    // }
});


export const ItemModel = mongoose.models.Item || mongoose.model('Item', ItemSchema);