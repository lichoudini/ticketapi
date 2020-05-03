var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
// Setup schema
var userSchema = mongoose.Schema({
    user: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    fechaIngreso: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var User = module.exports = mongoose.model('user', userSchema);
module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}