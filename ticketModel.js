var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
// Setup schema
var ticketSchema = mongoose.Schema({
    ticket_shop_id: {
        type: String,
        required: true,
        unique: true
    },
    ticket_client_id: {
        type: String,
        required: true
    },
    ticket_status: {
        type: String,
        required: true
    },
    ticket_creation_date: {
        type: Date,
        default: Date.now
    }
});
// Export Ticket model
var ticket = module.exports = mongoose.model('ticket', ticketSchema);
module.exports.get = function (callback, limit) {
    ticket.find(callback).limit(limit);
}