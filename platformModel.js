var mongoose = require('mongoose');
// Setup schema
var platformSchema = mongoose.Schema({
    profileid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        default:'...',
        required: true
    },
    username: {
        type: String,
        default:'...',
        required: false
    },
    password: {
        type: String,
        default:'...',
        required: false
    },
    usermail: {
        type: String,
        default:'...',
        required: false
    },
    url: {
        type: String,
        default:'...',
        required: false
    },
    observ: {
        type: String,
        default:'...',
        required: false
    }
});
// Export Contact model
var Platform = module.exports = mongoose.model('platform', platformSchema);
module.exports.get = function (callback, limit) {
    Platform.find(callback).limit(limit);
}