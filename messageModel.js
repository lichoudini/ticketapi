var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
// Setup schema
var messageSchema = mongoose.Schema({
    shop_id: {
        type: String,
        required: true
    },
    ticket_id: {
        type: String,
        required: true
    },
    creator_id: {
        type: String,
        required: true
    },
    creator_role: {
        type: String,
        required: true
    },
    creation_date: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String
    }
});
// Export Message model
var message = module.exports = mongoose.model('message', messageSchema);
module.exports.get = function (callback, limit) {
    message.find(callback).limit(limit);
}