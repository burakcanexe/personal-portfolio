import { Schema, models, model } from 'mongoose'

const ProjectModel = new Schema({
    slug: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    url: {
        type: String
    },
    technologies: {
        type: Array
    },
    day: {
        type: Number
    },
    jobTitle: {
        type: String
    },
    mainPicture: {
        type: String
    },
    logo: {
        type: String
    }
}, {
    timestamps: true
})

const Project = models.Project || model('Project', ProjectModel)
export default Project