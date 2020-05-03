
// Import platform model
Platform = require('./platformModel');


// Handle index actions
exports.index = function (req, res) {
    Platform.get(function (err, platforms) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Platforms retrieved successfully",
            data: platforms
        });
    });
};
// Handle create profile actions
exports.new = function (req, res) {
    var platform = new Platform();
    platform.profileid = req.body.profileid ? req.body.profileid : platform.profileid;
    platform.name = req.body.name;
    platform.username = req.body.username; 
    platform.password = req.body.password;
    platform.usermail = req.body.usermail;
    platform.url = req.body.url;
    platform.observ = req.body.observ;

// save the platform and check for errors
    platform.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New platform created!',
            data: platform
        });
    });
};

// Handle view platform info
exports.view = function (req, res) {
    Platform.find({
        profileid: req.params.platform_profileid
    }, function (err, platform) {
        if (err)
            res.send(err);
        res.json({
            message: 'Platform details loading..',
            data: platform
        });
    });
};

// Handle update platform info
exports.update = function (req, res) {
Platform.findById(req.params.platform_id, function (err, platform) {
        if (err)
            res.send(err);
        platform.profileid = req.body.profileid ? req.body.profileid : platform.profileid;
        platform.name = req.body.name ? req.body.name : platform.name;
        platform.username = req.body.username ? req.body.username : platform.username;
        platform.password = req.body.password ? req.body.password : platform.password;
        platform.usermail = req.body.usermail ? req.body.usermail : platform.usermail;
        platform.url = req.body.url ? req.body.url : platform.url;
        platform.observ = req.body.observ ? req.body.observ : platform.observ;

// save the platform and check for errors
        platform.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Platform Info updated',
                data: platform
            });
        });
    });
};

// Handle delete platform
exports.delete = function (req, res) {
    Platform.deleteMany({profileid:req.params.platform_profileid},function(err,result){
        if (err){
            res.send(err);
        } else {
            res.send(result);
        }
    })
};

// Handle view platform info
exports.viewPlatform = function (req, res) {
    Platform.find({profileid: req.params.platform_profileid }, function (err, platforms) {
        platforms.map(platform => {
            if (platform._id == req.params.platform_id){
                if (err)
                res.send(err);
                res.json({
                    message: 'Platform details loading..',
                    data: platform
                });
            }
        })
    });
}
// Handle update platform info
exports.updatePlatform = function (req, res) {
    Platform.find({profileid:req.params.platform_profileid}, function (err, platforms) {
        if (err)
        res.send(err);
        platforms.map(platform =>{
            if (platform._id == req.params.platform_id){
                platform.profileid = req.body.profileid ? req.body.profileid : platform.profileid;
                platform.name = req.body.name ? req.body.name : platform.name;
                platform.username = req.body.username ? req.body.username : platform.username;
                platform.password = req.body.password ? req.body.password : platform.password;
                platform.usermail = req.body.usermail ? req.body.usermail : platform.usermail;
                platform.url = req.body.url ? req.body.url : platform.url;
                platform.observ = req.body.observ ? req.body.observ : platform.observ;
                // save the platform and check for errors
                platform.save(function (err) {
                    if (err)
                        res.json(err);
                    res.json({
                        message: 'Platform Info updated',
                        data: platform
                    });
                });
            }

        })
    });
}

// Handle update platform info
exports.deletePlatform = function (req, res) {
    Platform.find({profileid:req.params.platform_profileid}, function (err, platforms) {
        if (err)
        res.send(err);
        platforms.map(platform =>{
            if (platform._id == req.params.platform_id){
                Platform.deleteOne({_id:req.params.platform_id},function(err,result){
                    if (err){
                        res.send(err);
                    } else {
                        res.json({
                            status: "success",
                            message: 'Platform deleted'
                        });
                    }
                })
            }
        })
    });
}
