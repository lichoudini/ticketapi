var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
// Setup schema
var agentSchema = mongoose.Schema({
    agent_shop_id: {
        type: String,
        required: true,
        unique: true
    },
    agent_role: {
        type: String,
        required: true
    },
    agent_name: {
        type: String,
        required: true
    },
    agent_password: {
        type: String,
        required: true
    },
    agent_tickets: {
        type: Array,
        default:[]
    }
});
// Export Agent model
var agent = module.exports = mongoose.model('agent', agentSchema);
module.exports.get = function (callback, limit) {
    agent.find(callback).limit(limit);
}