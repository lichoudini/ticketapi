// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to TicketManagerApi crafted with love!',
    });
});

// Import contact controller

//var profileController = require('./profileController');
//var platformController = require('./platformController');
var shopController = require('./shopController');
var agentController = require('./agentController');


// Shop routes
router.route('/shops')
    .get(shopController.index)
    .post(shopController.new);
router.route('/shops/:shop_id')
    .get(shopController.view)
    .delete(shopController.delete)
router.route('/shops/:shop_id/:action')
    .patch(shopController.update)
    .put(shopController.update)

// Agent Routes
router.route('/agents')
    .get(agentController.index)
    .post(agentController.new);
router.route('/agents/:agent_id')
    .get(agentController.view)
    .delete(agentController.delete)
router.route('/agents/:agent_id/:action')
    .patch(agentController.update)
    .put(agentController.update)



/*
// Profile routes
router.route('/profiles')
    .get(profileController.index)S
    .post(profileController.new);
router.route('/profiles/:profile_id')
    .get(profileController.view)
    .patch(profileController.update)
    .put(profileController.update)
    .delete(profileController.delete)
router.route('/search')
    .post(profileController.search)

// Platforms routes
router.route('/platforms')
    .get(platformController.index)
    .post(platformController.new)
router.route('/platforms/:platform_profileid')
    .get(platformController.view)
    .patch(platformController.update)
    .put(platformController.update)
    .delete(platformController.delete)
router.route('/platforms/:platform_profileid/:platform_id')
    .get(platformController.viewPlatform)
    .patch(platformController.updatePlatform)
    .put(platformController.updatePlatform)
    .delete(platformController.deletePlatform)
*/

// Export API routes
module.exports = router;


