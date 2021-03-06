var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
// Setup schema
var ticketSchema = mongoose.Schema({
    shop_id: {
        type: String,
        required: true,
        unique: true
    },
    client_id: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    creation_date: {
        type: Date,
        default: Date.now
    }
});
// Export Ticket model
var ticket = module.exports = mongoose.model('ticket', ticketSchema);
module.exports.get = function (callback, limit) {
    ticket.find(callback).limit(limit);
}