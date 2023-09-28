import { Schema, models, model } from 'mongoose'

const BlogModel = new Schema({
    slug: {
        type: String
    },
    title: {
        type: String
    },
    content: {
        type: String
    },
    description: {
        type: String
    },
    categories: [{
        type: Schema.Types.ObjectId,
        ref: 'Category',
        default: []
    }],
    mainPicture: {
        type: String
    }
}, {
    timestamps: true
})

const Blog = models.Blog || model('Blog', BlogModel)
export default Blog