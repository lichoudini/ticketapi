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
        agent.save(function (err) {
                res.json({
                    message: 'New agent created!',
                    data: agent
                });
            });
        };

// Handle view agent info
exports.view = function (req, res) {
    Agent.findById(req.params.agent_id, function (err, agent) {
        if (err)
            res.send(err);
        res.json({
            message: 'Agent details loading..',
            data: agent
        });
    });
};

// Handle update agent info
exports.update = function (req, res) {

    //Agent ChangeRole
    if (req.params.action == 'changeRole'){
        Agent.updateOne(
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

    //Agent ChangeName
    if (req.params.action == 'changeName'){
        Agent.updateOne(
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

    //Agent ChangePassword
    if (req.params.action == 'changePassword'){
        Agent.updateOne(
           {_id: req.params.agent_id },
           {agent_password:req.body.agent_password},
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

