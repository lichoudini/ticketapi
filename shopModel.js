var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
// Setup schema
var shopSchema = mongoose.Schema({
    shop_name: {
        type: String,
        required: true,
        unique: true
    },
    shop_agents: {
        type: String
    },
    shop_clients: {
        type: String
    },
    shop_tickets: {
        type: String
    }
});
// Export Contact model
var Shop = module.exports = mongoose.model('shop', shopSchema);
module.exports.get = function (callback, limit) {
    Shop.find(callback).limit(limit);
}