// Import client model
Client = require('./clientModel');


// Handle index actions
exports.index = function (req, res) {
    Client.get(function (err, client) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Clients retrieved successfully",
            data: client
        });
    });
};


// Handle create client actions
exports.new = function (req, res) {
    let client = new Client();
        client.shop_id = req.body.shop_id;
        client.name = req.body.name;
        client.password = req.body.password;
        client.save(function (err) {
                res.json({
                    message: 'New client created!',
                    data: client
                });
            });
        };

// Handle view client info
exports.view = function (req, res) {
    Client.findById(req.params.client_id, function (err, client) {
        if (err)
            res.send(err);
        res.json({
            message: 'Client details loading..',
            data: client
        });
    });
};

// Handle update client info
exports.update = function (req, res) {


    //Client ChangeName
    if (req.params.action == 'changeName'){
        Client.updateOne(
           {_id: req.params.client_id },
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

    //Client ChangePassword
    if (req.params.action == 'changePassword'){
        Client.updateOne(
           {_id: req.params.client_id },
           {password:req.body.password},
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
    Client.remove({
        _id: req.params.client_id
    }, function (err, client) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'client deleted'
        });
    });
};

