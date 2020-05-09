// profileController.js
// Import profile model
Shop = require('./shopModel');
// Handle index actions
exports.index = function (req, res) {
    Shop.get(function (err, shop) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Shops retrieved successfully",
            data: shop
        });
    });
};


// Handle create profile actions
exports.new = function (req, res) {
    let shop = new Shop();
    Shop.find({shop : req.body.name}).exec(function(err, docs){
        if(docs.length){
            res.json({
                message: 'Shop already exists'
            });
            } else{
            shop.name = req.body.name;
            shop.agents = req.body.agents;
            shop.clients = req.body.clients;
            shop.tickets = req.body.tickets;
            shop.save(function (err) {
                    res.json({
                        message: 'New shop created!',
                        data: shop
                    });
                });
            }
        })
};


// Handle view shop info
exports.view = function (req, res) {
    Shop.findById(req.params.shop_id, function (err, shop) {
        if (err)
            res.send(err);
        res.json({
            message: 'Shop details loading..',
            data: shop
        });
    });
};



// Handle update profile info
exports.update = function (req, res) {

    //Agents ChangeName
    if (req.params.action == 'changeName'){
        Shop.updateOne(
           {_id: req.params.shop_id },
           {name:req.body.name},
            function(err,result){
                if (err){
                res.send(err);        
                } else {
                res.send(result);
                }
            }
        )
    }
    //Agents Update
    if (req.params.action == 'addAgent'){
        Shop.updateOne(
           {_id: req.params.shop_id },
           { $addToSet: {agents: [req.body.agent]}},
            function(err,result){
                if (err){
                res.send(err);        
                } else {
                res.send(result);
                }
            }
        )
    }
    if (req.params.action == 'removeAgent'){
        Shop.updateOne(
           {_id: req.params.shop_id },
           { $pullAll: {agents: [req.body.agent]}},
            function(err,result){
                if (err){
                res.send(err);        
                } else {
                res.send(result);
                }
            }
        )
    }
    //Clients Update
    if (req.params.action == 'addClient'){
        Shop.updateOne(
           {_id: req.params.shop_id },
           { $addToSet: {clients: [req.body.client]}},
            function(err,result){
                if (err){
                res.send(err);        
                } else {
                res.send(result);
                }
            }
        )
    }
    if (req.params.action == 'removeClient'){
        Shop.updateOne(
           {_id: req.params.shop_id },
           { $pullAll: {clients: [req.body.client]}},
            function(err,result){
                if (err){
                res.send(err);        
                } else {
                res.send(result);
                }
            }
        )
    }
    //Tickets Update
    if (req.params.action == 'addTicket'){
        Shop.updateOne(
           {_id: req.params.shop_id },
           { $addToSet: {tickets: [req.body.ticket]}},
            function(err,result){
                if (err){
                res.send(err);        
                } else {
                res.send(result);
                }
            }
        )
    }
    if (req.params.action == 'removeTicket'){
        Shop.updateOne(
           {_id: req.params.shop_id },
           { $pullAll: {tickets: [req.body.ticket]}},
            function(err,result){
                if (err){
                res.send(err);        
                } else {
                res.send(result);
                }
            }
        )
    }
}



exports.delete = function (req, res) {
    Shop.remove({
        _id: req.params.shop_id
    }, function (err, shop) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Shop deleted'
        });
    });
};

