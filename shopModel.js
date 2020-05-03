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
        type: Array,
        default:[]
    },
    shop_clients: {
        type: Array,
        default:[]
    },
    shop_tickets: {
        type: Array,
        default:[]
    }
});
// Export Contact model
var Shop = module.exports = mongoose.model('shop', shopSchema);
module.exports.get = function (callback, limit) {
    Shop.find(callback).limit(limit);
}