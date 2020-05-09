var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
// Setup schema
var clientSchema = mongoose.Schema({
    shop_id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
// Export Client model
var client = module.exports = mongoose.model('client', clientSchema);
module.exports.get = function (callback, limit) {
    client.find(callback).limit(limit);
}