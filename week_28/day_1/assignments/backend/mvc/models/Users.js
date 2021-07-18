const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        username: {
            type: String,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        }
    },
    {
        versionKey: false,
    }
);

module.exports = mongoose.model("Users", usersSchema);
