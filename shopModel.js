var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
// Setup schema
var shopSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    agents: {
        type: Array,
        default:[]
    },
    clients: {
        type: Array,
        default:[]
    },
    tickets: {
        type: Array,
        default:[]
    }
});
// Export Contact model
var Shop = module.exports = mongoose.model('shop', shopSchema);
module.exports.get = function (callback, limit) {
    Shop.find(callback).limit(limit);
}