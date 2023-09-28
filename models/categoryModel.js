import { Schema, models, model } from 'mongoose'

const CategoryModel = new Schema({
    slug: {
        type: String
    },
    name: {
        type: String
    },
    blogs: [{
        type: Schema.Types.ObjectId,
        ref: 'Blog',
        default: []
    }],
    mainPicture: {
        type: String
    }
}, {
    timestamps: true
})

const Category = models.Category || model('Category', CategoryModel)
export default Category