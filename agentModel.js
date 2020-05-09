var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
// Setup schema
var agentSchema = mongoose.Schema({
    shop_id: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true
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
// Export Agent model
var agent = module.exports = mongoose.model('agent', agentSchema);
module.exports.get = function (callback, limit) {
    agent.find(callback).limit(limit);
}