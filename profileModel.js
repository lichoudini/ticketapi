var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
// Setup schema
var profileSchema = mongoose.Schema({
    profilename: {
        type: String,
        required: true,
        unique: true
    },
    fechaIngreso: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var Profile = module.exports = mongoose.model('profile', profileSchema);
module.exports.get = function (callback, limit) {
    Profile.find(callback).limit(limit);
}