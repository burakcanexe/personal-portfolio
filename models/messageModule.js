import { Schema, models, model } from 'mongoose'

const MessageModule = new Schema({
    name: {
        type: String
    },
    surname: {
        type: String
    },
    company: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    services: {
        type: Array
    }
}, {
    timestamps: true
})

const Message = models.Message || model('Message', MessageModule)
export default Message