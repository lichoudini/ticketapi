// Import agent model
Agent = require('./agentModel');


// Handle index actions
exports.index = function (req, res) {
    Agent.get(function (err, agent) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Agents retrieved successfully",
            data: agent
        });
    });
};


// Handle create agent actions
exports.new = function (req, res) {
    let agent = new Agent();
        agent.agent_shop_id = req.body.agent_shop_id;
        agent.agent_role = req.body.agent_role;
        agent.agent_name = req.body.agent_name;
        agent.agent_password = req.body.agent_password;
        agent.agent_tickets = req.body.agent_tickets;
        agent.save(function (err) {
                res.json({
                    message: 'New agent created!',
                    data: agent
                });
            });
        };


/*
// Handle update profile info
exports.update = function (req, res) {

    //Agents ChangeName
    if (req.params.action == 'changeName'){
        agent.updateOne(
           {_id: req.params.agent_id },
           {agent_name:req.body.agent_name},
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
        agent.updateOne(
           {_id: req.params.agent_id },
           { $addToSet: {agent_agents: [req.body.agent_agent]}},
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
        agent.updateOne(
           {_id: req.params.agent_id },
           { $pullAll: {agent_agents: [req.body.agent_agent]}},
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
        agent.updateOne(
           {_id: req.params.agent_id },
           { $addToSet: {agent_clients: [req.body.agent_client]}},
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
        agent.updateOne(
           {_id: req.params.agent_id },
           { $pullAll: {agent_clients: [req.body.agent_client]}},
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
        agent.updateOne(
           {_id: req.params.agent_id },
           { $addToSet: {agent_tickets: [req.body.agent_ticket]}},
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
        agent.updateOne(
           {_id: req.params.agent_id },
           { $pullAll: {agent_tickets: [req.body.agent_ticket]}},
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
    Agent.remove({
        _id: req.params.agent_id
    }, function (err, agent) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'agent deleted'
        });
    });
};

