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
        agent.shop_id = req.body.shop_id;
        agent.role = req.body.role;
        agent.name = req.body.name;
        agent.password = req.body.password;
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
           {role:req.body.role},
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

    //Agent ChangePassword
    if (req.params.action == 'changePassword'){
        Agent.updateOne(
           {_id: req.params.agent_id },
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

