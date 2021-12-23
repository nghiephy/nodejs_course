const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, maxLength: 255 },
        description: { type: String, maxLength: 600 },
        image: { type: String, maxLength: 255 },
        deletedAt: { type: Boolean },
        videoId: { type: String, unique: true },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

Course.plugin(mongooseDelete, { overrideMethods: true, deletedAt: true });
mongoose.plugin(slug);

module.exports = mongoose.model('Course', Course);
