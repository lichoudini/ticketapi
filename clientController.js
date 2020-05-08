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
        client.client_shop_id = req.body.client_shop_id;
        client.client_name = req.body.client_name;
        client.client_password = req.body.client_password;
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
           {client_name:req.body.client_name},
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
           {client_password:req.body.client_password},
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

