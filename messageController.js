// Import message model
Message = require('./messageModel');


// Handle index actions
exports.index = function (req, res) {
    Message.get(function (err, message) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Message retrieved successfully",
            data: message
        });
    });
};


// Handle create message actions
exports.new = function (req, res) {
    let message = new Message();
        message.shop_id = req.body.shop_id;
        message.ticket_id = req.body.ticket_id;
        message.creator_id = req.body.creator_id;
        message.creator_role = req.body.creator_role;
        message.content = req.body.content;
        message.save(function (err) {
                res.json({
                    message: 'New message created!',
                    data: message
                });
            });
        };

// Handle view messageinfo
exports.view = function (req, res) {
    Message.findById(req.params.message_id, function (err, message) {
        if (err)
            res.send(err);
        res.json({
            message: 'Message details loading..',
            data: message
        });
    });
};

/*
// Handle update message info
exports.update = function (req, res) {


    //Ticket ChangeStatus
    if (req.params.action == 'changeStatus'){
        Ticket.updateOne(
           {_id: req.params.ticket_id },
           {ticket_status:req.body.ticket_status},
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

*/
exports.delete = function (req, res) {
    Message.remove({
        _id: req.params.message_id
    }, function (err, message) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'message deleted'
        });
    });
};

