const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            require: true,
            // ensure thought is between 1 and 280 characters
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            require: true
        },
        // add reaction
    },
    {
        toJSON: {
            getters: true
        }
    }
)