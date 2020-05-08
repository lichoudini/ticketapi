// Import ticket model
Ticket = require('./ticketModel');


// Handle index actions
exports.index = function (req, res) {
    Ticket.get(function (err, ticket) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Tickets retrieved successfully",
            data: ticket
        });
    });
};


// Handle create ticket actions
exports.new = function (req, res) {
    let ticket = new Ticket();
        ticket.ticket_shop_id = req.body.ticket_shop_id;
        ticket.ticket_client_id = req.body.ticket_client_id;
        ticket.ticket_status = req.body.ticket_status;
        ticket.save(function (err) {
                res.json({
                    message: 'New ticket created!',
                    data: ticket
                });
            });
        };

// Handle view ticket info
exports.view = function (req, res) {
    Ticket.findById(req.params.ticket_id, function (err, ticket) {
        if (err)
            res.send(err);
        res.json({
            message: 'Ticket details loading..',
            data: ticket
        });
    });
};

// Handle update ticket info
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


exports.delete = function (req, res) {
    Ticket.remove({
        _id: req.params.ticket_id
    }, function (err, ticket) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'ticket deleted'
        });
    });
};

